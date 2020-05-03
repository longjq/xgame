package iface

import (
	"xgame/config"
)

type IServer interface{
	GetServiceConfig(id int32) *config.ServiceConfig

	GetConf() *config.SystemConf

	GetService(serviceId int32) IService

	SendEvent(eventData []byte, srcId int32, dstId int32, eventType int32, param1 int32, param2 int32, origEvent interface{})

}