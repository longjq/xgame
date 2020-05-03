package network

import (
	"io"
	"fmt"
	"bytes"
	"encoding/binary"
	"github.com/golang/protobuf/proto"
)

const (
	SHAKE_HAND_VERSION = 1      // 内部握手版本号，暂定1
	SIZEOF_HEADER = 24			// 消息头部长度
)

type Header struct{
	Length int32		// 包体长度
	Command int32		// 命令
	Transaction int32	// 事务id
	User int32			// 用户id
	Result int32		// 结果：0=成功，非0=失败
	Route int32			// 路由，服务器id
}

func NewHeader(l int, c int, t int, u int, rs int, r int) *Header{
	h := &Header{
		Length: int32(l),
		Command: int32(c),
		Transaction: int32(t),
		User: int32(u),
		Result: int32(rs),
		Route: int32(r),
	}
	return h
}

func (self *Header) Decode(buf []byte, start int) error{
	var err error
	reader := bytes.NewReader(buf[start:])
	err = binary.Read(reader, binary.BigEndian, &self.Length)
	err = binary.Read(reader, binary.BigEndian, &self.Command)
	err = binary.Read(reader, binary.BigEndian, &self.Transaction)
	err = binary.Read(reader, binary.BigEndian, &self.User)
	err = binary.Read(reader, binary.BigEndian, &self.Result)
	err = binary.Read(reader, binary.BigEndian, &self.Route)
	return err
}

func (self *Header) Encode() ([]byte,error){
	var err error
	writer := bytes.NewBuffer([]byte{})
	err = binary.Write(writer, binary.BigEndian, &self.Length)
	err = binary.Write(writer, binary.BigEndian, &self.Command)
	err = binary.Write(writer, binary.BigEndian, &self.Transaction)
	err = binary.Write(writer, binary.BigEndian, &self.User)
	err = binary.Write(writer, binary.BigEndian, &self.Result)
	err = binary.Write(writer, binary.BigEndian, &self.Route)
	if err != nil {
		return nil, err
	}
	return writer.Bytes(), nil
}

func (self *Header) String() string{
	return fmt.Sprintf("Length:%d Command:%d Transaction:%d User:%d Result:%d Route:%d", self.Length,self.Command,self.Transaction,self.User,self.Result, self.Route)
}

type ClientMessage struct{
	*Header
	IBody interface{}
	Body []byte
}

func NewClientMessage() *ClientMessage {
	return &ClientMessage{}
}

func (self *ClientMessage) Ok(){
	self.Header.Result = 0
}

func (self *ClientMessage) Fail(code int) {
	self.Header.Result = int32(code)
}

func (self *ClientMessage) Encode(f func(interface{}) []byte) []byte{
	// 外部方法实现具体消息的处理
	bodyByte := f(self.IBody)

	// 加起来得到最后的长度
	self.Header.Length = int32(len(bodyByte) + SIZEOF_HEADER)
	// 编码得到最后的头部字节长度
	headerByte, err := self.Header.Encode()
	if err != nil {
		fmt.Println("Encode ClientMessage Err", err)
	}
	// 返回得到结果字节数据
	self.Body = append(headerByte, bodyByte...)

	return self.Body
	// fmt.Println("----encode---1>",self.Body)
	// fmt.Println(fmt.Sprintf("----encode---2>%T",self.Body))



	// fmt.Println("----encode---1>",self.IBody)
	// fmt.Println(fmt.Sprintf("----encode---2>%T",self.IBody))


	// bodyFunc()
	// data, err := proto.Marshal(self.IBody)  
    // if err != nil {
		// fmt.Println("encode err", err)
	// }
	// 编码当前数据，并返回数据流
	// body_str = self.body.SerializeToString()
	// self.header.length = len(body_str) + SIZEOF_HEADER
	// stream = self.header.encode() + body_str 
	// return stream
}

// 服务器之间的握手协议
type ShakeHandPack struct{
	Version				byte	// 版本号
	ServerNameLength 	int16	// 服务名的长度
	ServerName 			[]byte	// 服务名
}

func NewShakeHandPack(serverName string) *ShakeHandPack{
	return &ShakeHandPack{
		Version: SHAKE_HAND_VERSION,
		ServerNameLength: int16(len(serverName)),
		ServerName: []byte(serverName),
	}
}

func (self *ShakeHandPack) Encode(writer io.Writer) error{
	var err error
	err = binary.Write(writer, binary.BigEndian, &self.Version)
	err = binary.Write(writer, binary.BigEndian, &self.ServerNameLength)
	err = binary.Write(writer, binary.BigEndian, &self.ServerName)
	return err
}

func (self *ShakeHandPack) Decode(reader io.Reader) error{
	var err error
	err = binary.Read(reader, binary.BigEndian, &self.Version)
	err = binary.Read(reader, binary.BigEndian, &self.ServerNameLength)
	self.ServerName = make([]byte, self.ServerNameLength)
	err = binary.Read(reader, binary.BigEndian, &self.ServerName)
	return err
}


// 服务器之间通信的消息协议
type EventPack struct{
	Mode uint16             // 消息类型，同步|异步
	Length uint16			// 消息长度
	SrcId uint16			// 发送消息的服务ID
	DstId uint16			// 接收消息的服务ID
	EventType int32			// 
	TranId int32
	Param1 int32
	Param2 int32
	EventData []byte
}

func NewEventPack() *EventPack{
	evt := &EventPack{

	}
	return evt
}


// 服务器与客户端的消息协议
type ClientMessagePack struct{
	Length int32
	Command int32
	Transaction int32
	User int32
	Result int32
	Route int32

	IBody []byte
}

// func NewDataPack() *DataPack{
// 	return &DataPack{}
// }

func GetHeader(raw []byte, rawLen int, start int) *Header{
	if rawLen < (start + SIZEOF_HEADER) {
		return nil
	}
	// 读取包头
	header := NewHeader(0,0,0,0,0,0)
	header.Decode(raw, start)
	return header
}

func GetRequest(raw []byte, rawLen int, start int) (*ClientMessage, int){
	header := GetHeader(raw, rawLen, start)

	if header == nil{
		return nil, -1
	}

	requestType := GetMessageClass(header.Command)
	// 包体长度 = 整体数据长度 - 包头长度
	SIZEOF_BODY := int(header.Length) - SIZEOF_HEADER
	// 假如当前接收的数据，小于计算出来的包体长度，说明还没有完全接收到完整的数据，所以返回
	if rawLen < (start + SIZEOF_HEADER + SIZEOF_BODY) {
		return nil, -2
	}

	proto.Unmarshal(raw[SIZEOF_HEADER:], requestType.(proto.Message))

	// fmt.Println("GetRequest---->",requestType,fmt.Sprintf("%T", requestType))
	// fmt.Printf("%T",requestType)

	request := NewClientMessage()
	request.Header = header
	request.IBody = requestType

	return request, start + SIZEOF_HEADER + SIZEOF_BODY
}

func CreateClientEvent(eventBody interface{}, cmd int32, user int32) *ClientMessage{
	event := NewClientMessage()
	event.Header = NewHeader(0,0,0,0,0,0)
	event.IBody = eventBody
	event.Header.User = user
	event.Header.Command = cmd
	event.Header.Transaction = -1
	event.Header.Result = 0
	return event
}

func CreateClientMessage(msgBody interface{}, cmd int32, user int32) *ClientMessage{
	msg := NewClientMessage()
	msg.Header = NewHeader(0,0,0,0,0,0)
	msg.IBody = msgBody
	msg.Header.User = user
	msg.Header.Command = cmd
	msg.Header.Transaction = -1
	msg.Header.Result = 0
	return msg
}

func CreateResponse(req *ClientMessage) *ClientMessage{
	responseType := GetMessageClass(req.Header.Command + 1)

	resp := NewClientMessage()
	resp.IBody = responseType
	resp.Header = NewHeader(0,0,0,0,0,0)
	resp.Header.User = req.Header.User
	resp.Header.Command = req.Header.Command + 1
	resp.Header.Transaction = req.Header.Transaction
	resp.Header.Result = -1

	return resp
}