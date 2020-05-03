package accessws

import (
	"fmt"
	"xgame/iface"
	// "xgame/message"
	"xgame/network"
)

const (
	E_SYSTEM_READY = 100
	E_KICKOFF_USER_CONNECTION_ID = 20
)

// 实现IService接口
type AccessWSService struct{
	network.BaseService
	Name string

	// Server iface.IServer
	accessWSServer *AccessWSServer
}

func NewAccessWSService(name string) iface.IService{
	svc := &AccessWSService{
		Name: name,
	}

	return svc
}

func (self *AccessWSService) GetBaseService() interface{}{
	return self.BaseService
}

// 实现了接口IService
func (self *AccessWSService) GetId() int32{
	return self.ServiceId
}

// 实现了接口IService
func (self *AccessWSService) GetName() string{
	return self.Name
}



// 实现了接口IService
func (self *AccessWSService) Initialize(server iface.IServer, id int32) {
	self.Server = server
	self.ServiceId = id
	// serverConfig := self.Server.GetServiceConfig(id)
	// ip := serverConfig.Options["access_server_ip"]
	// port := serverConfig.Options["access_server_port"]
	ip := "localhost"
	port := "8700"

	// 创建接入服务器
	self.accessWSServer = NewAccessWSServer(id, self.Server.GetConf(), ip, port)
	// 设置接入服务器对象的接入服务对象
	self.accessWSServer.SetAccessWSService(self)



	self.InitBase()
	fmt.Println(self.Name,".Initialize()",)
}

// 实现了接口IService
func (self *AccessWSService) Stop(){
	fmt.Println("AccessWSService.Stop")
}

// 实现IService接口
func (self *AccessWSService) OnEvent(event iface.IEvent)  {
	fmt.Println("accessservice ----->-->", event)
	if event.GetEventType() ==  E_SYSTEM_READY{
		fmt.Println("Access Service Receive System Ready Event")
		return
	}else if event.GetEventType() == E_KICKOFF_USER_CONNECTION_ID{
		// 重复登录，踢掉已登录用户
	}else{
		// nothing to do
	}

	if event.GetParam1() >= 0 {
		// 发送响应
		self.accessWSServer.ResponseUserMessage(event.GetParam1(), event.GetParam2(), event.GetEventType(),event.GetEventData())
	}else{
		// 发送推送
		self.accessWSServer.SendClientEvent(event.GetParam1(), event.GetParam2(), event.GetEventType(),event.GetEventData())
	}
}


func (self *AccessWSService) Run(){
	fmt.Println("Run")
}