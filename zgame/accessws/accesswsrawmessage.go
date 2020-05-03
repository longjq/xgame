package accessws

import (
	"time"
	// "fmt"
	// "xgame/message"
	// "github.com/golang/protobuf/proto"
	"xgame/network"

)

type AccessWSRawMessage struct{
	*network.Header
	Data []byte
	ReceiveTime int64
}

func NewAccessWSRawMessage(header *network.Header, data []byte) *AccessWSRawMessage{
	arm := &AccessWSRawMessage{
		Header: header,
		Data: data,
		ReceiveTime: time.Now().Unix(),
	}

	return arm
}

// func GetRequest(raw *AccessWSRawMessage) (*message.ClientMessage, int){
	// 解开包头
	// header, err := message.NewHeader(0,0,0,0,0,0,nil).Decode(raw.GetData())
	// if err != nil {
	// 	fmt.Println("decode header error", err)
	// 	return nil, -1
	// }
	// hader := raw.Header

	// // 拿到proto的数据
	// requestType := message.GetMessageClass(header.Command)
	// err = proto.Unmarshal(raw.GetData()[24:], requestType.(proto.Message))
	// if err != nil {
	// 	fmt.Println("decode data error",err)
	// 	return nil, -2
	// }

	// cm := message.NewClientMessage()
	// cm.Header = header
	// cm.IBody = requestType

	// return cm, 0
	// return nil, 0
// }