package accessws

import (
	"fmt"
	"time"
	"errors"
	"github.com/gorilla/websocket"
	"github.com/gogf/gf/util/gconv"

	// msgBus "xgame/message"
	"xgame/network"
	"xgame/pb"
	"github.com/golang/protobuf/proto"
)

const (
	DEBUG_MODE = true
)

var (
	CONNECT_GAME_SERVER_REQ_ID = pb.E_ConnectGameServerReq.Field
	KICKOFF_USER_CONNECTION_ID = pb.E_QuitGameServerReq.Field
	NOTIFICATION_EVENT_ID       = pb.E_NotificationEvent.Field
	CONNECT_GAME_SERVER_RESP_ID = pb.E_ConnectGameServerResp.Field
)
type AccessWSClientConnection struct{
	wsserver *AccessWSServer		// 接入服务器
	conn *websocket.Conn		// 连接的ws客户端
	User int32					// 当前connection保连接的用户id
	isSafe bool					// 是否通过正常连接业务连接的

	isClosed bool				// 当前连接是否已关闭
	// transactions map[int32]*messagebase.ClientMessage

	msgChan chan []byte			// 阻塞通道
	msgBuffChan chan []byte		// 缓冲通道
	msgExitBuffChan chan bool	// 退出通道
	ConnectionId string         // 连接ID ServiceID + 时间戳

	// receiveQueue chan *messagebase.AccessRawMessage
	// closeQueue chan bool		// 退出队列

	heartbeatTime int64			// 心跳时间戳
	loginTime int64				// 登陆时间戳

	session string				// 鉴权的session
}


func NewAccessWSClientConnection(srv *AccessWSServer, sock *websocket.Conn) *AccessWSClientConnection{
	acc := &AccessWSClientConnection{
		wsserver: srv,
		conn: sock,
		User: -1,

		isClosed: false,
		ConnectionId: gconv.String(srv.Service.GetId()) + gconv.String(time.Now().Unix()),
		msgChan: make(chan []byte),
		msgBuffChan: make(chan []byte, 10),
		msgExitBuffChan: make(chan bool, 1),
	}

	return acc
}

func (self *AccessWSClientConnection) GetConnID() int32{
	return self.User
}
func (self *AccessWSClientConnection) Handle(){
	fmt.Println("a client connecting now .....")

	self.conn.SetReadLimit(maxMessageSize)              //设置最大读取容量
	self.conn.SetReadDeadline(time.Now().Add(pongWait)) //设置读取死亡时间
	self.conn.SetPongHandler(func(string) error { self.conn.SetReadDeadline(time.Now().Add(pongWait)); return nil })


	// 协程写
	go self.StartWriter()

	// 此处必须阻塞掉，否则会马上结束程序
	go self.StartReader()

	// 必须打开，执行心跳，保持长连接
	// for {
	// 	// mt, message, err := self.conn.ReadMessage()
	// 	// if err != nil {
	// 	// 	// log.Println("read:", err)
	// 	// 	fmt.Println("read:",err)
	// 	// 	break
	// 	// }
	// 	// // log.Printf("recv: %s", message)
	// 	// fmt.Println("recv:",message,mt)

	// 	err := self.conn.WriteMessage(websocket.TextMessage, []byte("heartbeat"))
	// 	// s := []byte("heartbeat")
	// 	// err = sock.WriteMessage(len(s),s)

	// 	if err != nil {
	// 		// log.Println("write:", err)
	// 		fmt.Println("write:",err)
	// 		break
	// 	}

		time.Sleep(time.Second * 1)
	// }

}



func (self *AccessWSClientConnection) StartReader(){
	for {
		// 此处不做粘包处理，默认任务接收到的参数是不会粘包
		_, message, err := self.conn.ReadMessage()
		if err != nil {
			fmt.Println("disconnected now ---> no data", err, message)
			break	
		}
		// 解开包头
		header := network.GetHeader(message, len(message), 0)
		if err != nil {
			fmt.Println("decode header error", err)
			break
		}
		fmt.Println("StartReader收到了客户端发送的数据：",message)
		// 处理包数据
		self.handleMessage(NewAccessWSRawMessage(header, message))
	}
}

func (self *AccessWSClientConnection) handleMessage(raw *AccessWSRawMessage) {
	// self.receiveQueue <- raw
	self.onMessage(raw)
}



func (self *AccessWSClientConnection) onMessage(raw *AccessWSRawMessage)  {
	// debug模式判断
	if DEBUG_MODE {
		request, idx := network.GetRequest(raw.Data, len(raw.Data), 0)
		fmt.Println(fmt.Sprintf("调试模式打开：==> receive message : cmd=%d | user=%d | route=%d | idx=%d", 
		request.Header.Command, 
		request.Header.User, 
		request.Header.Route,
		idx))
		fmt.Println("调试模式打开：message body:\n", request.IBody)
	}
	

	// 判断是否已连接
	if self.isSafe == false {
		if raw.Header.Command != CONNECT_GAME_SERVER_REQ_ID {
			// 第一个连接的消息不对时
			fmt.Println(fmt.Sprintf("the first message must be ConnectGamerServer , user = %d", raw.Header.User))
			self.Stop()
		}else{
			// 没有连接过，进行连接业务操作
			self.connectServer(raw)
		}
		return
	}else{
		// 已经连接过了，重新连接
		if raw.Header.Command == CONNECT_GAME_SERVER_REQ_ID {
			self.connectServer(raw)
			return
		}
	}
	// 进行安全的消息处理
	result := self.onSafeMessage(raw)

	// 消息处理结果判断
	if result < 0 {
		fmt.Println(fmt.Sprintf("result(%d) is failure and user = %d, it should not happen",result,raw.Header.User))
		self.Stop()
	}
}

func (self *AccessWSClientConnection) connectServer(raw *AccessWSRawMessage) {
	sUser := gconv.String(raw.Header.User)
	if session ,err := self.wsserver.Rds.HGet("sessions", sUser).Result(); err != nil{
		fmt.Println(fmt.Sprintf("鉴权失败：在Redis中找不到指定User[%s]的Session值,%s", sUser,err))
		// 鉴权失败
		goto errSessionGOTO
	}else{
		request, _ := network.GetRequest(raw.Data, len(raw.Data), 0)

		// request, idx := network.GetRequest(raw.Data, len(raw.Data), 0)
		// 进行连接时的鉴权操作，必须先去登陆服中进行登陆，种session值
		if connectGameServerReq, ok := request.IBody.(*pb.ConnectGameServerReq); ok {
			if (connectGameServerReq.GetSession() == session) {
				self.heartbeatTime = int64(time.Now().Unix())
				self.isSafe = true
				self.User = request.Header.User
				self.loginTime = self.heartbeatTime
				self.session = session

				// 验证是否重复登陆
				// 查找用户上次映射记录
				sOldServerId, err := self.wsserver.Rds.HGet("mapping", sUser).Result()
				if err != nil{
					fmt.Println("找不到上次mapping映射的oldServerId",sOldServerId,"==")
				}
				oldServerId := gconv.Int32(sOldServerId)
				
				// 上次连接的服务id不是本次的服务id
				if oldServerId != self.wsserver.ServerId {
					ac := self.wsserver.Service.(*AccessWSService)
					ac.ForwardMessageDirectly(oldServerId, KICKOFF_USER_CONNECTION_ID, request.Header.User, -1, nil)
				}
				
				// 老链接断开
				if oldConnection, ok := self.wsserver.Users[request.Header.User]; ok {
					fmt.Println(fmt.Sprintf("Same user is logined so kick off previous one user = %d", request.Header.User))
					// 断开前需要发送消息给客户端
					event := network.CreateClientEvent(pb.NotificationEvent{}, NOTIFICATION_EVENT_ID, request.Header.User)
					eventBody := event.IBody.(pb.NotificationEvent)
					eventBody.Type = pb.PB_NotificationType(pb.NotificationType_N_KICK_OFF)
					event.Encode(func(IBody interface{}) []byte{
						data, err := proto.Marshal(&eventBody)  
						if err != nil {
							fmt.Println("Encode err", err)
							return nil
						}
						return data
					})
					
					
					oldConnection.Stop()
					oldConnection.Send(event.Body)
				}

				// 设置当前连接信息
				self.wsserver.Users[request.Header.User] = self
				self.wsserver.Rds.HSet("server:"+gconv.String(self.wsserver.ServerId), request.Header.User, self.ConnectionId)
				self.wsserver.Rds.HSet("mapping", sUser, self.wsserver.ServerId)

				// 转发消息
				ac := self.wsserver.Service.(*AccessWSService)
				ac.ForwardMessage(raw.Header, raw.Data)

				// 回复连接成功的响应
				resp := network.CreateClientMessage(pb.ConnectGameServerResp{}, CONNECT_GAME_SERVER_RESP_ID, raw.Header.User)
				respBody := resp.IBody.(pb.ConnectGameServerResp)
				respBody.ServerTime = &self.heartbeatTime
				self.SendBuff(resp.Encode(func(IBody interface{}) []byte{
					data, err := proto.Marshal(&respBody)
					if err != nil {
						fmt.Println("Encode err", err)
						return nil
					}
					return data
				}))


			}else{
				fmt.Println(fmt.Sprintf("鉴权失败：User[%s]在Request的Session值[%s]，Redis中的值[%s]", sUser, connectGameServerReq, session))
				// 鉴权失败
				// 回复连接成功的响应
				resp := network.CreateClientMessage(pb.ConnectGameServerResp{}, CONNECT_GAME_SERVER_RESP_ID, raw.Header.User)
				respBody := resp.IBody.(pb.ConnectGameServerResp)
				// respBody.ServerTime = &self.heartbeatTime
				resp.Header.Result = -1
				self.SendBuff(resp.Encode(func(IBody interface{}) []byte{
					data, err := proto.Marshal(&respBody)
					if err != nil {
						fmt.Println("Encode err", err)
						return nil
					}
					return data
				}))
			}
		}else{
			fmt.Println("鉴权失败：异常，请求类型不是ConnectGameServerReq，不该发生")
			// 鉴权失败
			goto errSessionGOTO
		}
		
	}

  	// 登陆失败标签
	errSessionGOTO:
		fmt.Println("login is failure ,so close it !")

}

func (self *AccessWSClientConnection) onSafeMessage(raw *AccessWSRawMessage) int {
	// 黑名单验证
	if expireAt, ok := self.wsserver.BlackUsers[raw.Header.User]; ok {
		if expireAt == -1 || expireAt > time.Now().Unix() {
			fmt.Println(fmt.Sprintf("user(%d) in access_server.blacklist, so delete user in access_server.users" ,raw.Header.User))
			self.Stop()
			return -1
		}
	}
	
	_, ok := self.wsserver.Users[raw.Header.User]
	if ok == false || raw.Header.User != self.User {
		fmt.Println("it should not happen,then close connection")
		self.Stop()
		return -2
	}

	self.heartbeatTime = time.Now().Unix()
	
	// self.transactions[raw.Header.Transaction] = raw
	ac := self.wsserver.Service.(*AccessWSService)
	ac.ForwardMessage(raw.Header, raw.Data)

	return 0
}

func (self *AccessWSClientConnection) StartWriter() {
	for{
		select{
		case data := <- self.msgChan:
			if err := self.conn.WriteMessage(websocket.BinaryMessage,data); err != nil {
				fmt.Println(fmt.Sprintf("Server [%s] send data error: %s", "AccessServer", err))
				return
			}
		case data, ok := <- self.msgBuffChan:
			if ok {
				if err := self.conn.WriteMessage(websocket.BinaryMessage,data); err != nil {
					fmt.Println(fmt.Sprintf("Server [%s] Send Buff Data error:%s", "AccessServer", err))
					return
				}
			} else {
				fmt.Println("msgBuffChan is Closed")
				break
			}
		case <- self.msgExitBuffChan:
			return
		}
	}
}

func (self *AccessWSClientConnection) Send(data []byte) error{
	if self.isClosed {
		return errors.New(fmt.Sprintf("Client [%s] Send is closed", "ws"))
	}

	self.msgChan <- data

	return nil
}

func (self *AccessWSClientConnection) SendBuff(data []byte) error {
	if self.isClosed {
		return errors.New(fmt.Sprintf("Client [%s] SendBuff is closed","ws"))
	}
	self.msgBuffChan <- data

	return nil
}
func (self *AccessWSClientConnection) Stop()  {
	// 此处需要删除accessserver.userid的map映射
}

func (self *AccessWSClientConnection) runReceive(){ 	
	// for{
	// 	select{
	// 		case msg := <- self.receiveQueue:
	// 			self.onMessage(msg)
	// 		case isClosed := <- self.closeQueue:
	// 			if isClosed {
	// 				return
	// 			}
	// 	}
		
	// }
}
