package network

import (
	"net"
	"errors"
	"bytes"
	// "encoding/binary"
	"fmt"
	"io"
	// "xgame/pb"
	// "github.com/golang/protobuf/proto"

)

type ClientConnection struct{
	server *Server
	clientName string
	serverName string
	serverIp string
	serverPort int
	conn *net.TCPConn
	remoteAddr net.Addr
	buf []byte
	isShakeHand bool
	isClosed bool

	msgChan chan []byte
	msgBuffChan chan []byte
	msgExitBuffChan chan bool
}


func NewClientConnection(server *Server, clientName string, serverIp string, serverPort int) *ClientConnection {
	cc := &ClientConnection{
		server: server,
		clientName: clientName,
		serverIp: serverIp,
		serverPort: serverPort,

		msgChan: make(chan []byte),
		msgBuffChan: make(chan []byte, 10),
		msgExitBuffChan: make(chan bool, 1),
	}

	return cc
}

func (self *ClientConnection) StartClientConnect()  {
	addr, err := net.ResolveTCPAddr("tcp4", fmt.Sprintf("%s:%d",self.serverIp,self.serverPort))
	if err != nil {
		fmt.Println("Client [",self.clientName,"] ResolveTCPAddr err：", err)
	}

	conn, err := net.DialTCP("tcp4", nil, addr)
	if err != nil {
		fmt.Println("Client [",self.clientName,"] DialTCP", err)
	}

	self.conn = conn

	fmt.Println("Client [",self.clientName,"] DialTCP [",addr,"]：success")

	go self.Start()
}

func (self *ClientConnection) Start()  {
	self.ConnectionMade()

	go self.StartReader()

	go self.StartWriter()
}

func (self *ClientConnection) ConnectionMade()  {
	self.remoteAddr = self.conn.RemoteAddr()

	// 客户端向服务端发起握手操作
	clientWriter := NewShakeHandPack(self.clientName)
	sendData := new(bytes.Buffer)
	clientWriter.Encode(sendData)
	if err := self.SendBuff(sendData.Bytes()); err != nil{
		fmt.Println("Client Send is err")
		return
	}
}


func (self *ClientConnection) Send(data []byte) error{
	if self.isClosed {
		return errors.New(fmt.Sprintf("Client [%s] Send is closed", self.clientName))
	}

	self.msgChan <- data

	return nil
}

func (self *ClientConnection) SendBuff(data []byte) error {
	if self.isClosed {
		return errors.New(fmt.Sprintf("Client [%s] SendBuff is closed", self.clientName))
	}
	self.msgBuffChan <- data

	return nil
}

func (self *ClientConnection) StartReader() {
	defer self.Stop()

	allBuf := make([]byte, 0)				// 总缓冲区
    buf := make([]byte, BYTES_SIZE)			// 此次消息缓冲区
	
	for {
		bufLen, err := self.conn.Read(buf)
		
		// 读取报错了
		if err != nil {
			if err == io.EOF{
				continue
			}else{
				fmt.Println("Client[",self.serverName,"].StartReader Error reading", err.Error())
				break //退出循环
			}
		}

		// 数据聚合
		if len(allBuf) == 0 {
			allBuf = buf[:bufLen]						// 赋值数据到总缓冲区
		}else{
			allBuf = append(allBuf, buf[:bufLen]...)	// 追加数据到总缓冲区
		}

		// 开始处理数据
		if self.isShakeHand {
			err = self.dataReceived(&allBuf)
			if err == nil {
				
			}else{
				break
			}
			// if self.dataReceived(buf[:bufLen]) != nil {
			// 	break
			// }
			break
		}else{
			if self.doShakeHand(buf[:bufLen]) != nil{
				break
			}
		}

        // if err != nil {
        //     fmt.Println("Client[].StartReader Error reading", err.Error())
        //     break //终止程序
		// }

		// if bufLen == 0 {
		// 	fmt.Println("Client[].StartReader DataLen is 0", err.Error())
        //     return //终止程序
		// }
		// err = self.dataReceived(self.buf[:bufLen])
		// if err != nil {
		// 	fmt.Println("Client[].dataReceived error", err.Error())
		// 	return
		// }
	}
}

func (self *ClientConnection) dataReceived(buf *[]byte) error {
		fmt.Println("received ----->", buf)
		return nil
}


func (self *ClientConnection) doShakeHand(buf []byte) error {
	// // 获取服务内握手数据
	clientShakeHandPack := NewShakeHandPack("")
	err := clientShakeHandPack.Decode(bytes.NewReader(buf))
	if err != nil {
		fmt.Println("Client[",self.serverName,"].doShakeHand Decode error", err)
		return err
	}

	self.serverName = string(clientShakeHandPack.ServerName)
	self.server.SetServiceConnection(self.serverName, self)
	self.isShakeHand = true
	fmt.Println(fmt.Sprintf("Server (%s,%s) shake hand successful", self.remoteAddr, self.serverName))
	
	// 测试发消息
	// req := pb.LoginReq{}
	// req.Mobile = proto.String("17712341234")
	// req.DeviceId = proto.String("DeviceId")
	// req.Password = proto.String("Password")
	// req.Token = proto.String("Token")
	// sendBytes, err := proto.Marshal(&req)
	// if err != nil{
	// 	fmt.Println("encode eeeeeee",err)
	// }

	// sendData := new(bytes.Buffer)
	// dp := NewDataPack()
	// dp.Length = int32(len(sendBytes))
	// dp.Command = 1
	// dp.Transaction = 1
	// dp.User = 100
	// dp.Result = 0
	// dp.Route = 100
	// dp.Encode(sendData)
	// fmt.Println("Header:",sendData.Bytes())
	// fmt.Println("Body:",sendBytes)
	// n := append(sendData.Bytes(), sendBytes...)
	// fmt.Println("All:",n)

	// if err := self.SendBuff(n); err != nil{
	// 	fmt.Println("Client Send is err")
	// 	return nil
	// }


	// fmt.Println(sendBytes)
	// fmt.Printf("%T, %T",sendBytes,bytes.NewBuffer(sendBytes))
	// dd := bytes.NewBuffer(sendBytes)
	// fmt.Println(dd.)
	// // dp.Encode(bytes.NewBuffer(sendBytes))
	// fmt.Println("=======bufff",dp)
	// self.SendBuff()

	return nil
}

func (self *ClientConnection) StartWriter() {
	for{
		select{
		case data := <- self.msgChan:
			fmt.Println("======>data====>",data)
			if _, err := self.conn.Write(data); err != nil {
				fmt.Println(fmt.Sprintf("Client [%s] send data error: %s", self.clientName, err))
				return
			}
		case data, ok := <- self.msgBuffChan:
			if ok {
				// 有数据要写给客户端
				if _, err := self.conn.Write(data); err != nil {
					fmt.Println(fmt.Sprintf("Client [%s] Send Buff Data error:%s", self.clientName, err))
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

func (self *ClientConnection) Stop(){	
}