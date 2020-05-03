package network

import (
	"xgame/iface"
	"time"
	"fmt"
)
type fn func(sessopm interface{}, req interface{}, resp interface{}, event iface.IEvent) *ClientMessage


func UserTransaction(event iface.IEvent, handler fn) {
	// return func(session interface{}, req interface{}, resp interface{}, event iface.IEvent) bool{
		// return handler(session, req, resp, event) 
	// }

		beginTime := time.Now().UnixNano() / 1e6

		req, _ := GetRequest(event.GetEventData(), len(event.GetEventData()), 0)
		resp := CreateResponse(req)
		fmt.Println("resp--->",resp)
		// 前置

		// TBD ...
		// 处理handler
		// session := "session"
		// req := "session"
		// resp := "session"
		// event := "session"
		// result := handler(session, req, resp, event)

		// 后置
		// TBD ...

		dur := (time.Now().UnixNano() / 1e6) - beginTime
		if dur >= 1000 {
			// fmt.Println(fmt.Sprintf("it takes %d seconds to handle cmd=%d,user=%d,result=%d", dur, req.Header.Comamnd, req.Header.User, resp.Header.Result))
		}

		// fmt.Println(handler, session, req, resp, event)




	
}