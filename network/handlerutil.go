package network

import (
	"xgame/iface"
	"time"
	"fmt"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/database/gdb"
	// "github.com/golang/protobuf/proto"

)
type fn func(session *gdb.TX, req interface{}, resp interface{}, event iface.IEvent) bool


func UserTransaction(server iface.IServer, serviceId int32, event iface.IEvent, handler fn) {
	// return func(session interface{}, req interface{}, resp interface{}, event iface.IEvent) bool{
		// return handler(session, req, resp, event) 
	// }
		db := g.DB()
		beginTime := time.Now().UnixNano() / 1e6

		req, _ := GetRequest(event.GetEventData(), len(event.GetEventData()), 0)
		resp := CreateResponse(req)
		// fmt.Println("resp--->",resp)
		// 前置

		handlerResult := false
		if tx, err := db.Begin(); err == nil {
			fmt.Println("开启事务操作")
			// 处理handler
			handlerResult = handler(tx, req, resp, event)

			if handlerResult {
				fmt.Println("返回成功，提交事务")
				tx.Commit()
			}else{
				fmt.Println("返回失败，回滚事务")
				tx.Rollback()
			}
		}else{
			fmt.Println("开启事务报错")
		}

		
		// session := "session"
		// req := "session"
		// resp := "session"
		// event := "session"
		// result := handler(session, req, resp, event)

		// 后置
		// TBD ...

		dur := (time.Now().UnixNano() / 1e6) - beginTime
		if dur >= 1000 {
			fmt.Println(fmt.Sprintf("it takes %d seconds to handle cmd=%d,user=%d,result=%d", dur, req.Header.Command, req.Header.User, resp.Header.Result))
		}
		fmt.Println(resp.IBody)

		// 回传消息
		if handlerResult {
			fmt.Println(resp)
			// server.SendEvent(resp.Encode(func(IBody interface{}) []byte{
			// 	data, err := proto.Marshal(&respBody)  
			// 	if err != nil {
			// 		fmt.Println("Encode err", err)
			// 		return nil
			// 	}
			// 	return data
			// }, serviceId, event.GetSrcId(), resp.Header.Command, event.GetParam1(), event.GetParam2(),nil))
		}
		// fmt.Println(handler, session, req, resp, event)




	
}