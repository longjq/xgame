package network

import (
	"github.com/gogf/gf/util/grand"
	"xgame/iface"
)

var ROUTE map[int32]interface{}

var cache map[int32][]int32

func init(){
	if cache == nil {
		cache = make(map[int32][]int32)
	}
}

func GetAnyService(header *Header, server iface.IServer) int32{
	
	if header.Route >= 0 {
		return header.Route
	}

	if ids, ok := cache[header.Command]; ok == false {
		cmd := GetMessageDef(header.Command)
		if cmd == nil{
			return -1
		}
		// fmt.Println("-=======>",cmd,cmd.Service.GetName())
		svcs := server.GetConf().Services[cmd.Service.GetName()]
		for _, svc := range svcs {
			// fmt.Println("---------->",svc.Id)
			cache[header.Command] = append(cache[header.Command], svc.Id)
		}
		
		ids := cache[header.Command]
		if len(ids) == 1{
			return ids[0]
		}else{
			return ids[grand.N(0,len(ids) - 1)]
		}
		// cache[header.Command] = svc
		// services := server.Conf.Services[cmd.Service]

		// ids := cache[header.Command]
	}else{
		if len(ids) == 1{
			return ids[0]
		}else{
			return ids[grand.N(0,len(ids) - 1)]
		}
	}
}