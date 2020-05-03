package network

import (
	"fmt"
	"xgame/iface"
	// "xgame/message"
)


type BaseService struct{
	Server iface.IServer			// 服务器对象
	ServiceId int32					// 服务ID
	// msgEvent chan iface.IEvent
	// msgBuffEvent chan iface.IEvent

	queue chan iface.IEvent			// 服务消息分发通道
	QueueMaxSize int
}

func (self *BaseService) InitBase()  {
	fmt.Println("BaseService InitBase")

	if self.QueueMaxSize <= 0 {
		self.QueueMaxSize = 10
	}
	self.queue = make(chan iface.IEvent, self.QueueMaxSize)
	go self._run()
	// self.queue <- "aaaa"
	// self.Dispatch(ss)
	
}

// 子类调用，填入消息
func (self *BaseService) Dispatch(event iface.IEvent){
	self.queue <- event
}

// 父类监听分发消息
func (self *BaseService) _run(){
	for{
		select{
		case msg, ok := <- self.queue:
			if ok {
				// 通过接口调用子类实现的OnEvent方法
				self.Server.GetService(self.ServiceId).OnEvent(msg)
			}
		}
	}
}

// 通过接口，调用实现server类的sendevent方法
func (self *BaseService) ForwardMessage(header *Header, data []byte)  {
	fmt.Println("BaseService.ForwardMessage===============>",header,data)
	dstId := GetAnyService(header, self.Server)
	if dstId == -1 {
		fmt.Println(fmt.Sprintf("No service handler for %d" ,header.Command))
		return
	}
	fmt.Println("SendEvent=======>",self.ServiceId, dstId, header.Command)
	self.Server.SendEvent(data, self.ServiceId, dstId, header.Command, header.User, header.Transaction, nil)
}

// 调用调取service挂载的server执行sendevent方法
func (self *BaseService) SendEvent(eventData []byte, dstId int32, eventType int32, param1 int32, param2 int32){
	self.Server.SendEvent(eventData, self.ServiceId, dstId, eventType, param1, param2, nil)
}

// 获取当前service挂载的server下的service配置文件
// 该方法待子类实现
// func (self *BaseService) GetServiceConfig() interface{}{
// 	return self.iServer.GetServiceConfig(self.serviceId)
// }

// // 待子类Service实现该方法
// func (self *BaseService) OnEvent(msg interface{}){

// }

// // 待子类Service实现该方法
// func (self *BaseService) Stop()  {
// 	fmt.Println("BaseService.Stop")
// }

// func (self *BaseService) onEvent(evt iface.IEvent)  {
	
// }



// 当服务连接时的hook函数
func (self *BaseService) OnServerConnect(serverName string, serviceIds string, isConnect bool){

}


func (self *BaseService) Stop()  {
	
}

func (self *BaseService) BaseOnEvent(event iface.IEvent)  {
	
}

func(self *BaseService) GetServiceID() int32{
	return self.ServiceId
}

func(self *BaseService) Run(){
// 	for {
// 		select{
// 		case evt := <- self.msgEvent:
// 			self.onEvent(evt)
// 		}
// 	}
}

	
func (self *BaseService) ForwardMessageDirectly(dst int32, eventType int32, user int32, transaction int, data []byte){
	fmt.Println("BaseService.ForwardMessageDirectly===============>",dst,eventType,user, transaction, data)

}


