package network

import (
	"fmt"
	"os"
	"strings"
	"xgame/iface"
)



var MapService map[string]iface.IService

func init(){
	if MapService == nil {
		MapService = make(map[string]iface.IService)
	}
}

func MountService(svc iface.IService){

	if _, ok := MapService[strings.ToLower(svc.GetName())]; ok {
		fmt.Printf("服务(%s) 已存在，请更换服务(%s)名称",svc.GetName(), svc.GetName())
		fmt.Println()
		os.Exit(1)
	}else{
		MapService[svc.GetName()] = svc
	}
}

