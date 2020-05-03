package network

import (
	"fmt"
	"strings"
	"xgame/config"
	"xgame/iface"
	"reflect"
	// "xgame/message"
)

// 路由表中代表服务的数据结构
type ServiceItem struct{
	ServiceId  int32					// serviceId，服务Id
	ServerName string					// serverName 所在服务的名字
	Connection iface.IConnection		// connection 和所在服务的连接频道对象
}

func NewServiceItem(serviceId int32, serverName string, connection iface.IConnection) *ServiceItem{
	svc := &ServiceItem{
		ServiceId: serviceId,
		ServerName: serverName,
		Connection: connection,
	}

	return svc
}

type Server struct{
	Conf *config.SystemConf          // 配置文件
	Services map[int32]iface.IService    // 挂载的服务实例
	Route map[int32]*ServiceItem         // 路由记录
	Name string                        // 当前服务器名
	factory *ConnectionFactory         // 连接实例工厂
}
func NewServer(conf *config.SystemConf) *Server{
	self := &Server{
		Conf: conf,
		Name: conf.MySelfName,
		Services: make(map[int32]iface.IService),
		Route: make(map[int32]*ServiceItem),
	}

	// 创建连接工厂实例
	self.factory = NewConnectionFactory(self)

	// 注册服务Service的路由ID
	for _, s := range self.Conf.Servers {
		for svcId, _ := range s.Services {
			self.Route[int32(svcId)] = NewServiceItem(int32(svcId), s.Name, nil)
		}
	}

	return self
}

// 注册服务到服务器对象
func (self *Server) InstallService(services ...iface.IService){
	// 遍历配置服务器项
	for _, serverConfig := range self.Conf.Servers {
		// 遍历服务器项目下的服务
		for _, svc := range serverConfig.Services {
			// 遍历注册进来的服务实例
			for _, service := range services {
				// 配置项与注册进来的服务实例对比
				if strings.ToLower(svc.Name) == strings.ToLower(service.GetName()) {
					// 如果当前运行的实例与配置一样就执行初始化与注册服务业务到当前服务器对象上
					if serverConfig.Name == self.Conf.MySelfName {
						service.Initialize(self, svc.Id)
						fmt.Println(fmt.Sprintf("%s install service ==> %s ", self.Conf.MySelfName, service.GetName()))
						self.registerService(service)
					}

					// 初始化路由
					if reflect.ValueOf(service).MethodByName("SetupRoute").IsValid() {
						reflect.ValueOf(service).MethodByName("SetupRoute").Call(nil)
					}
				}
			}
		}
	}
}

func (self *Server) GetService(serviceId int32) iface.IService{
	return self.Services[serviceId]
}


// 挂载服务到服务器对象上
func (self *Server) registerService(service iface.IService)  {
	self.Services[service.GetId()] = service
}

// 启动服务器
func (self *Server) Run(){
	fmt.Println("Setup network configuration...")
	// 遍历配置文件,分别启动服务器和客户端
	for _, server := range self.Conf.Servers {
		// 是否是当前服务器
		if server.Name == self.Name {
			// 启动当前服务器,马上结束循环
			self.factory.StartServerConnection(server.Port)
			break
		}else{
			// 启动客户端连接
			self.factory.CreateClientConnection(server.IP, server.Port)
		}
	}
}

// 网络层在网络协议建立后，请求服务器对象建立和对端Server的通讯频道
// 1）服务器对象创建connection对象
// 2）服务器对象为每个服务设置通讯connection
func (self *Server) SetServiceConnection(targetName string, serverConnection iface.IConnection)  {
	for _, svc := range self.Route {
		if svc.ServerName == targetName {
			svc.Connection = serverConnection
		}
	}
}

func (self *Server) GetServiceConfig(id int32) *config.ServiceConfig{
	return self.Conf.MySelf.Services[id]
}

func (self *Server) GetServerConfig(id int) {
	
}

func (self *Server) GetConf() *config.SystemConf{
	return self.Conf
}

// 可通过调用本函数，发送事件给指定服务
// 1)服务器对象首先检查目标服务的位置
// 2)对于远程服务，通过connection对象发送事件至对端服务器
// 3)对于本地服务，则直接转发
// eventData : 发送的数据
// srcId : 源服务的标记，如origEvent不为空，则为origEvent.dstId
// dstId : 目标服务的标记，如origEvent不为空，则为origEvent.srcId
// eventType: 事件  型，如果不填写则为－1
// origEvent: 为源事件
func (self *Server) SendEvent(eventData []byte, srcId int32, dstId int32, eventType int32, param1 int32, param2 int32, origEvent interface{}) {
	// 源事件判断
	if origEvent != nil {
		evt := origEvent.(Event)
		srcId = evt.SrcId
		dstId = evt.DstId
		param1 = evt.Param1
		param2 = evt.Param2
	}
	// fmt.Println("分发事件", self.Route,srcId, dstId, self.Route[dstId])
	// 路由表中判断目标service是否存在
	if item, ok := self.Route[dstId]; ok == false {
		fmt.Println(fmt.Sprintf("Event(%s) Missing due to no this service(%d)",eventData, dstId))
		return
	}else{
		event := NewCreateEvent(srcId, dstId, eventType, param1, param2, eventData)
		
		if item.ServerName == self.Name {
			self._dispatchEvent(event)
		}else{
			if item.Connection == nil {
				fmt.Println(fmt.Sprintf("Event(event=%d,dstId=%d) Missing due to network problem",eventType,dstId))
				return
			}

			// 调用iconnection实现类，阻塞发消息
			evtStream, err := event.ToStream()
			if err != nil {
				return
			}
			item.Connection.Send(evtStream)
		}
	}
}

// 分发事件至本地服务的函数
func (self *Server) _dispatchEvent(evt *Event){
	
	if evt.Mode == EVENT_MODE_SYNC_RESP {
		
	}else{
		if svc, ok := self.Services[evt.DstId]; ok {
			// svc.Dispatch("Dispatch_",svc,ok)
			bs := svc.GetBaseService().(BaseService)
			fmt.Println("bs--->",bs)
			bs.Dispatch(evt)
			// fmt.Println("Dispatch", svc, ok)

			// fmt.Println(svc, ok)

			// fmt.Println(svc)
		}
	}
}



func (self *Server) ShutDown(){
	for _, service := range self.Services {
		service.Stop()
	}
}


