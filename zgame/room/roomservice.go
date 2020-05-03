package room

import (
	"fmt"

	"xgame/iface"
	"xgame/network"
)

type RoomService struct{
	network.GameService
	Name string
}

func NewRoomService(name string) iface.IService{
	svc := &RoomService{
		Name: name,
	}

	return svc
}


func (self *RoomService) GetBaseService() interface{}{
	return self.BaseService
}


func (self *RoomService) GetName() string{
	return self.Name
}

func (self *RoomService) GetId() int32{
	return self.GetServiceID()
}


func (self *RoomService) Initialize(server iface.IServer,id int32) {
	self.InitBase()
	fmt.Println("RoomService.Initialize()")
}

func (self *RoomService) SetupRoute() {}

func (self *RoomService) Stop(){
	// self.GameService.Stop()
}



// 实现IService接口
func (self *RoomService) OnEvent(event iface.IEvent)  {
	// fmt.Println(event)
	self.GameService.OnEvent(event)
}