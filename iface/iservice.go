package iface



type IService interface{
	GetName() string
	GetId() int32
	Initialize(server IServer, id int32)
	Stop()
	// GetServiceId()
	OnEvent(evt IEvent)
	GetBaseService() interface{}


}