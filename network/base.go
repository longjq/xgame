package network

import (
	"reflect"
	// "errors"

	"github.com/golang/protobuf/proto"
	"xgame/pb"
	"fmt"
	"xgame/iface"
)

const (
	E_SYSTEM_READY = 100
)

// 消息映射
var Mapping map[int32]*MessageDef

func init(){
	if Mapping == nil {
		Mapping = make(map[int32]*MessageDef)

		ext := proto.RegisteredExtensions((*pb.Mapping)(nil))
		for key, val := range ext {
			Mapping[key] = &MessageDef{
				Service: nil,
				MsgId: key,
				MsgCls: reflect.TypeOf(val.ExtensionType),
			}
		}
	}
}

type MessageDef struct{
	Service iface.IService
	MsgId int32
	MsgCls reflect.Type
}

func GetMessageClass(cmd int32) interface{}{
	msgDef := GetMessageDef(cmd)
	return reflect.New(msgDef.MsgCls.Elem()).Interface()
}

func SetMessageHandler(cmd int32, service iface.IService)  {
	msgDef := GetMessageDef(cmd)
	if msgDef == nil {
		// return errors.New("msg id = "+string(cmd)+"is not exist")
		fmt.Println("msg is = ",cmd,"is not exists")
	}
	msgDef.Service = service
}

func GetMessageDef(cmd int32) *MessageDef{
	return Mapping[cmd]
}


// access
// func GetHeader(buf []byte, bufSize int, start int) *Header{
// 	if bufSize < (SIZEOF_HEADER + start) {
// 		return nil
// 	}

// 	header, err := NewHeader(0,0,0,0,0,0,nil).Decode(buf)
// 	if err != nil {
// 		fmt.Println("decode header error", err)
// 		return nil
// 	}
// 	return header
// }

// func GetRequest(raw *AccessRawMessage) (cm *ClientMessage, idx int){
// 	if raw.Header == nil {
// 		raw.Header = GetHeader(raw.Data, len(raw.Data), 0)
// 	}
// 	fmt.Println(raw.Header)

// 	// fmt.Println("解包All---->",raw.Data)
// 	// fmt.Println("解包Body---->",raw.Data[24:])
// 	// // var umData pb.LoginReq

// 	// m1 := pb.LoginReq{}
// 	// m1.Mobile = proto.String("13480879974")
// 	// fmt.Println(m1)

// 	// umData := &pb.LoginReq{}
// 	requestType := GetMessageClass(raw.Header.Command)
	
// 	// fmt.Println("--->",requestType.(proto.Message))
// 	fmt.Println("----->",Mapping[raw.Header.Command].MsgCls)
// 	// aa := Mapping[raw.Header.Command]
	
// 	t := Mapping[raw.Header.Command].MsgCls
// 	fmt.Println("---->",t)
// 	err := proto.Unmarshal(raw.Data[24:], requestType.(proto.Message))
// 	if err != nil {
// 		fmt.Println("---->",err)
// 	}
// 	// a := reflect.TypeOf(requestType)
// 	fmt.Println(requestType)
// //   a := requestType.(aa.MsgCls)
// 	// fmt.Println(requestType.(aa.Elem()).GetToken())
// 	// fmt.Println(*umData.Token)
// 	// // fmt.Println(requestType.MsgCls)
// 	// // request := GetClientMessage()
// 	// // request.Body = requestType()

// 	return cm,100
// }

// func GetClientMessage() *ClientMessage{
// 	return NewClientMessage()
// }

