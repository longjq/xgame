package accessws

import (
	"net/http"
	"fmt"
	"time"
	"github.com/gorilla/websocket"
	rdsClient "github.com/go-redis/redis/v7"

	"xgame/config"
	"xgame/iface"
	"github.com/gogf/gf/util/gconv"
	// messagebase "xgame/message"

)

const (
    // Time allowed to write a message to the peer.
    writeWait = 10 * time.Second

    // Time allowed to read the next pong message from the peer.
    pongWait = 60 * time.Second

    // Send pings to peer with this period. Must be less than pongWait.
    pingPeriod = (pongWait * 9) / 10

    // Maximum message size allowed from peer.
    maxMessageSize = 512
)


var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
    WriteBufferSize: 1024,
	// 解决跨域问题
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
} // use default options

type AccessWSServer struct{
	Service iface.IService       // AccessService 服务
	ServerId int32                 // 当前服务器对象实例ID
	Conf *config.SystemConf    // 配置文件
	port string                  // 当前服务器对象监听客户端断开

	//connWSMgr *AccessWSConnManager   // WS服务器对象管理连接对象实例

	BlackUsers map[int32]int64               // 黑名单用户[userid]黑名单截至日期

	Users map[int32]*AccessWSClientConnection                   // 在线用户

	Rds *rdsClient.Client                 // rds 连接

}


func NewAccessWSServer(id int32, conf *config.SystemConf, ip string, port string) *AccessWSServer{
	acc := &AccessWSServer{
		ServerId: id,
		Conf: conf,
		port: port,
		BlackUsers: make(map[int32]int64),
		Users: make(map[int32]*AccessWSClientConnection),
	}

	// 初始化rds连接
	acc.Rds = rdsClient.NewClient(&rdsClient.Options{
		Addr:     "172.17.0.4:6379", // use default Addr
		Password: "Long1990",               // no password set
		DB:       0,                // use default DB
	})

	// 加载黑名单列表
	if bu, err := acc.Rds.HGetAll("black_users").Result(); err != nil{
		acc.BlackUsers = nil
	}else{
		for userId, expireAt := range bu {
			uid := gconv.Int32(userId)
			eat := gconv.Int64(expireAt)
			acc.BlackUsers[int32(uid)] = eat
		}
	}
	
	// 开启ws服务，暂只支持ws
	go acc.StartWSServer()

	// go acc.checkConnection()

	// go acc.kickUser()

	return acc
}

func (self *AccessWSServer) StartWSServer(){
	http.HandleFunc("/", func (w http.ResponseWriter, r *http.Request)  {
		sock, err := upgrader.Upgrade(w, r, nil)
		
		if err != nil {
			// log.Print("upgrade:", err)
			fmt.Println("Upgrade error", err)
			return
		}
		defer sock.Close()

		// 接收到客户端对象，交给connection对象处理
		client := NewAccessWSClientConnection(self, sock)
		
		// 添加连接
		// self.GetConnMgr().Add(client)

		// 监听client数据
		client.Handle()

	})
	fmt.Println("WS running ....")
	http.ListenAndServe("0.0.0.0:"+self.port,nil)
}

type Hub struct{
	register   chan *AccessWSClientConnection
    unregister chan *AccessWSClientConnection
}

func (self *Hub) start(){
	// for {
	// 	select{
	// 	case conn := <- self.register:
			
	// 	}
	// }
}

func (self *AccessWSServer) ResponseUserMessage(param1 int32, param2 int32, eventType int32, eventData []byte){
	fmt.Println("AccessWSServer发送响应给客户端")
}


func (self *AccessWSServer) SendClientEvent(param1 int32, param2 int32, eventType int32, eventData []byte){
	fmt.Println("AccessWSServer转发请求给内网服务")
}

// 设置当前接入服务器对象管理的接入服务
func (self *AccessWSServer) SetAccessWSService(svc iface.IService){
	self.Service = svc
}

// 协程监听登陆进来的用户
func (self *AccessWSServer) start(){

}


func (self *AccessWSServer) StartTCPServer(){

}

func (self *AccessWSServer) GetConnMgr() *AccessWSConnManager{
	// return self.connWSMgr
	return nil
}

// func (self *AccessWSServer) ForwardMessage(header *messagebase.Header, data[] byte){
// 	fmt.Println("ForwardMessage---->",header,data)
// }

