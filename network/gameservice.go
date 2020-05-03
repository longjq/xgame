package network

import (
	"fmt"
	"xgame/iface"
	"reflect"
)


type GameService struct{
	BaseService
	EventHandlers map[int32]fn
}

func (self *GameService) RegisteCommand(reqId interface{}, resp interface{}, handler fn){
	if self.EventHandlers == nil {
		self.EventHandlers = make(map[int32]fn)
	}
	// fmt.Println(self.Server)
	_reqId := int32(reflect.ValueOf(reqId).Int()) 
	// fmt.Println(self.Server.GetService(self.ServiceId))
	SetMessageHandler(_reqId, self.Server.GetService(self.ServiceId))
	self.EventHandlers[_reqId] = handler
}

func (self *GameService) RegisteHandler(reqId int32, resp interface{}, handler fn){
	if self.EventHandlers == nil {
		self.EventHandlers = make(map[int32]fn)
	}
	self.EventHandlers[int32(reflect.ValueOf(reqId).Int())] = handler
}

// func (self *GameService) InitBase(){

	// self.EventHandlers = make(map[int32]func(session interface{}, req interface{}, resp interface{}, event iface.IEvent) *ClientMessage)
// }

// func (self *GameService)  {
	
// }

func (self *GameService) OnEvent(event iface.IEvent){
	if handler, ok := self.EventHandlers[event.GetEventType()]; ok == false {
		fmt.Println(fmt.Sprintf(" No valid event handler for event:%d", event.GetEventType()))
		return
	}else{
		UserTransaction(event, handler)
	}
}
