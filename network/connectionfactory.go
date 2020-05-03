package network

import (
	"net"
	"fmt"
)


type ConnectionFactory struct{
	Host *Server	// server 对象
	ServerName string	// 当前server 对象名称
}

func NewConnectionFactory(host *Server) *ConnectionFactory {
	cf := &ConnectionFactory{
		Host: host,
		ServerName: host.Name,
	}

	return cf
}

func (self *ConnectionFactory) CreateClientConnection(serverIp string, serverPort int) {
	NewClientConnection(self.Host, self.Host.Name, serverIp, serverPort).StartClientConnect()
}

func (self *ConnectionFactory) HandleServerConnection(conn *net.TCPConn) {
	// 服务器方法处理连接
	NewServerConnection(self.Host).Handle(conn)
}

// 开始服务器的监听
func (self *ConnectionFactory) StartServerConnection(port int) {
	// 启动服务器
	addr, err := net.ResolveTCPAddr("tcp4", fmt.Sprintf("0.0.0.0:%d",port))
	if err != nil {
		fmt.Println("Server [",self.Host.Name,"] ResolveTCPAddr err：", err)
	}

	// 准备监听
	listener, err := net.ListenTCP("tcp4", addr)
	if err != nil {
		fmt.Println("Server [",self.Host.Name,"] ListenTCP", err)
	}

	fmt.Println("Server [",self.Host.Name,"] ListenTCP Port [",port,"]：success")

	// 协程监听连接
	go func(){
		// 循环监听连接
		for{
			// 当前连接进来了
			conn, err := listener.AcceptTCP()
			if err != nil {
				fmt.Println("Server [",self.Host.Name,"] AcceptTCP err", err)
			}
			// 服务器方法处理该连接
			self.HandleServerConnection(conn)
		}
	}()
}
