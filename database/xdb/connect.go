package xdb

import (
	"fmt"
    "github.com/gogf/gf/database/gdb"
)
var dsn = "root:root@tcp(127.0.0.1:3306)/demo?charset=utf8"

var sessionMaker *gdb.DB

func GetSession(){
	if sessionMaker == nil{
		setupSession(dsn)
	}
}

func setupSession(dsn string){
	
}