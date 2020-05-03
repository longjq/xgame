package index

import (
	"fmt"

	"xgame/iface"
	"xgame/network"
	"xgame/pb"
)

type IndexService struct{
	network.GameService
	Name string
}

func NewIndexService(name string) iface.IService{
	svc := &IndexService{
		Name: name,
	}

	return svc
}

func (self *IndexService) GetName() string{
	return self.Name
}

func (self *IndexService) GetBaseService() interface{}{
	return self.BaseService
}


func (self *IndexService) GetId() int32{
	return self.GetServiceID()
}


func (self *IndexService) Initialize(server iface.IServer,id int32) {
	self.Server = server
	self.ServiceId = id
	
	// self.InitBase()
	self.InitBase()

	fmt.Println("IndexService.Initialize()")
}

func (self *IndexService) Stop(){
	// self.GameService.Stop()
}

// 实现IService接口
func (self *IndexService) OnEvent(event iface.IEvent)  {
	self.GameService.OnEvent(event)
}

func (self *IndexService) SetupRoute() {
	self.RegisteCommand(pb.ConnectGameServerReq_ID, pb.ConnectGameServerResp_ID, self.HandleConnectGameServer)
}

func (self *IndexService) HandleConnectGameServer(session interface{}, req interface{}, resp interface{}, event iface.IEvent) *network.ClientMessage{

	fmt.Println("握手辣")
	return nil
}

