package hall

import (
	"xgame/iface"
	"fmt"
	"xgame/network"
)

type HallService struct{
	network.GameService

	Name string
}

func NewHallService(name string) iface.IService{
	svc := &HallService{
		Name: name,
	}

	return svc
}

func (self *HallService) GetName() string{
	return self.Name
}

func (self *HallService) GetId() int32{
	return self.GetServiceID()
}

func (self *HallService) GetBaseService() interface{}{
	return self.BaseService
}


func (self *HallService) Initialize(server iface.IServer,id int32) {
	self.InitBase()
	fmt.Println(self.Name,".Initialize()")
}

func (self *HallService) SetupRoute() {}

func (self *HallService) Run(){
	fmt.Println("Run")
}

func (self *HallService) Stop(){
	fmt.Println("HallService.Stop")
}

// 实现IService接口
func (self *HallService) OnEvent(event iface.IEvent)  {
	// fmt.Println(event)
	self.GameService.OnEvent(event)
}