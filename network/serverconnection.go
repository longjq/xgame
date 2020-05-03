package network

import (
	"net"
	"fmt"
	"bytes"
	"encoding/binary"
	"errors"
	"io"
	"xgame/pb"
	"github.com/golang/protobuf/proto"
)

const (
	BYTES_SIZE int = 4096
	HEAD_SIZE int = 24
)

type ServerConnection struct{
	server *Server                        // 监听服务器实例对象
	serverName string                     // 服务器名称
	clientName string                     // 客户端名称
	conn *net.TCPConn
	
	isClosed bool
	isShakeHand bool
	port int

	remoteAddr net.Addr

	msgChan chan []byte                    // 阻塞的读写协程
	msgBuffChan chan []byte                // 缓冲的读写协程
	msgExitBuffChan chan bool              // 缓冲的退出协程
}

func NewServerConnection(server *Server) *ServerConnection{
	srvConn := &ServerConnection{
		server: server,
		serverName: server.Name,

		msgChan: make(chan []byte),
		msgBuffChan: make(chan []byte, 10),
		msgExitBuffChan: make(chan bool, 1),
	}

	return srvConn
}

func (self *ServerConnection) Handle(conn *net.TCPConn)  {
	// 设置当前服务连接对象
	self.conn = conn

	// 初始化配置
	self.ConnectionMade()

	// 协程读
	go self.StartReader()

	// 协程写
	go self.StartWriter()
}

func (self *ServerConnection) ConnectionMade()  {
	// 设置对方client的地址
	self.remoteAddr = self.conn.RemoteAddr()

	// 初始化握手
	self.isShakeHand = false
}

func (self *ServerConnection) StartReader() {
	defer self.Stop()
	allBuf := make([]byte, 0)			// 总缓冲区
    buf := make([]byte, BYTES_SIZE)		// 此次缓冲区
	for {
		bufLen, err := self.conn.Read(buf)

		// 读取报错了
        if err != nil {
			if err == io.EOF && bufLen == 0{
				fmt.Println("客户端退出")
				self.Stop()
				// continue
				break
			}else{
				fmt.Println("Server[",self.serverName,"].StartReader Error reading", err.Error())
				break //退出循环
			}
		}

		// 数据聚合
		if len(allBuf) == 0 {
			allBuf = buf[:bufLen]
		}else{
			allBuf = append(allBuf, buf[:bufLen]...)
		}
		// 开始处理数据
		if self.isShakeHand {
			err = self.dataReceived(&allBuf)
			if err == nil {
				
			}else{
				break
			}
		}else{
			err = self.doShakeHand(allBuf)
			if err == nil{
				allBuf = nil
			}else{
				break
			}
		}
	}
}


func (self *ServerConnection) dataReceived(buf *[]byte) error {
	// dataPack := NewDataPack()
	s := (*buf)[:]
	// fmt.Println(s,len(s))

	// dataPack.Decode(bytes.NewReader(*buf))
	// fmt.Println("---server received=----->",dataPack)
	// fmt.Println("s---------------------<>",buf)
	// req := pb.LoginReq{}
	var req pb.LoginReq
	// fmt.Println(proto.Unmarshal,req.(proto.Message))
	// fmt.Println(s)
	proto.Unmarshal(s, &req)
	fmt.Println("protoAll:",req)
	fmt.Println(fmt.Sprintf("protoType:%T", req))
	// proto.Unmarshal(&buf[24:], req.(proto.Message))

	resp := pb.LoginResp{}
	resp.Uid = proto.Int32(100)
	resp.Session = proto.Int32(123321)
    sendData, _ := proto.Marshal(&resp)
	fmt.Println(sendData)
	// dataPack := NewDataPack()
	// bytes.NewReader()

	// 向客服端发送握手数据
	// sendData1 := new(bytes.Buffer)
	// dataPP := NewDataPack()
	// dataPP.Length = int32(len(sendData))
	// dataPP.Command = 1
	// dataPP.Transaction = 1
	// dataPP.User = 100
	// dataPP.Result = 0
	// dataPP.Route = 100
	// err1 := dataPP.Encode(sendData1)
	// if err1 != nil{
	// 	fmt.Println("Server[",self.serverName,"].doShakeHand Encode error", err1)
	// 	return err1
	// }

	// n := append(sendData1.Bytes(), sendData...)

	// // 回传给客户端
	// if err := self.SendBuff(n); err != nil{
	// 	fmt.Println(err)
	// 	return err
	// }


	return nil
	// if self.isShakeHand {
	// 	// self.buffer += buf
		
	// 	// for {
	// 			// CreateEventFromStream()
	// 	// }

	// }else{
	// 	// self.buf = append(self.buf, buf)
	// 	dataBuff := bytes.NewReader(buf)

	// 	var (
	// 		magicCode1 uint16
	// 		magicCode2 uint16
	// 		clientNameLength uint16
	// 	)
		
	// 	if err := binary.Read(dataBuff, binary.LittleEndian, &magicCode1); err != nil{
	// 		fmt.Println("read magicCode1 err,",err)
	// 		return err
	// 	}
	// 	if err := binary.Read(dataBuff, binary.LittleEndian, &magicCode2); err != nil{
	// 		fmt.Println("read magicCode2 err,",err)
	// 		return err
	// 	}
	// 	if err := binary.Read(dataBuff, binary.LittleEndian, &clientNameLength); err != nil{
	// 		fmt.Println("read magicCode2 err,",err)
	// 		return err
	// 	}
		
	// 	clientName := make([]byte, clientNameLength)
	// 	if err := binary.Read(dataBuff, binary.LittleEndian, &clientName); err != nil{
	// 		fmt.Println("read serverName err,",err)
	// 		return err
	// 	}
		
	// 	data, err := self.GetShankeHandData()
	// 	if err != nil {
	// 		fmt.Println(fmt.Sprintf("Server [%s] GetShankeHandData error:%s", self.serverName, err))
	// 		return err
	// 	}
		
	// 	if err := self.SendBuff(data); err != nil{
	// 		fmt.Println(err)
	// 		return err
	// 	}

	// 	self.server.SetServiceConnection(string(clientName), self)
	// 	self.isShakeHand = true
	// 	fmt.Println(fmt.Sprintf("Server (%s:%s) shake hand successful", self.remoteAddr, clientName))
	// }
	// return nil
}

// 握手连接
func (self *ServerConnection) doShakeHand(buf []byte) error {
	// 获取服务内握手数据
	clientReader := bytes.NewReader(buf)
	clientShakeHand := NewShakeHandPack("")
	err := clientShakeHand.Decode(clientReader)
	if err != nil{
		fmt.Println("Server[",self.serverName,"].doShakeHand Decode error", err)
		return err
	}
	// 向客服端发送握手数据
	serverWriter := NewShakeHandPack(self.serverName)
	sendData := new(bytes.Buffer)
	err = serverWriter.Encode(sendData)
	if err != nil{
		fmt.Println("Server[",self.serverName,"].doShakeHand Encode error", err)
		return err
	}

	// 回传给客户端
	if err := self.SendBuff(sendData.Bytes()); err != nil{
		fmt.Println(err)
		return err
	}

	self.clientName = string(clientShakeHand.ServerName)
	self.server.SetServiceConnection(self.clientName, self)
	self.isShakeHand = true
	fmt.Println(fmt.Sprintf("Client (%s,%s) shake hand successful", self.remoteAddr, self.clientName))
	
	return nil
}


func (self *ServerConnection) GetShankeHandData() ([]byte, error) {
	var (
		magicCode1 uint16 = 20
		magicCode2 uint16 = 7
		serverNameLength uint16 = uint16(len(self.serverName))
	)
	serverName := []byte(self.serverName)

	dataBuff := bytes.NewBuffer([]byte{})

	if err := binary.Write(dataBuff, binary.LittleEndian, &magicCode1); err != nil{
		return nil ,err
	}
	if err := binary.Write(dataBuff, binary.LittleEndian, &magicCode2); err != nil{
		return nil ,err
	}
	if err := binary.Write(dataBuff, binary.LittleEndian, &serverNameLength); err != nil{
		return nil ,err
	}
	if err := binary.Write(dataBuff, binary.LittleEndian, &serverName); err != nil{
		return nil ,err
	}
	return dataBuff.Bytes(), nil
}

	
func (self *ServerConnection) Send([]byte) error{
	return nil
}

func (self *ServerConnection) SendBuff(data []byte) error {
	if self.isClosed {
		return errors.New(fmt.Sprintf("Client [%s] SendBuff is closed", self.server.Name))
	}
	
	self.msgBuffChan <- data
	

	return nil
}


func (self *ServerConnection) StartWriter() {
	for{
		select{
		case data := <- self.msgChan:
			if _, err := self.conn.Write(data); err != nil {
				fmt.Println(fmt.Sprintf("Server [%s] send data error: %s", self.serverName, err))
				return
			}
		case data, ok := <- self.msgBuffChan:
			if ok {
				if _, err := self.conn.Write(data); err != nil {
					fmt.Println(fmt.Sprintf("Server [%s] Send Buff Data error:%s", self.serverName, err))
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

func (self *ServerConnection) Stop() {
	
}