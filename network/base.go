package network

import (
	// "reflect"
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
		// Mapping = make(map[int32]*MessageDef)

		// ext := proto.RegisteredExtensions((*pb.Mapping)(nil))
		// for key, val := range ext {
		// 	Mapping[key] = &MessageDef{
		// 		Service: nil,
		// 		MsgId: key,
		// 		MsgCls: val.ExtensionType,
		// 	}
		// }
		Mapping = map[int32]*MessageDef{
			pb.LoginReq_DEF_value["ID"]: &MessageDef{
				Service: nil,
				MsgId: pb.LoginReq_DEF_value["ID"],
				MsgCls: new(pb.LoginReq),
			},
			pb.LoginResp_DEF_value["ID"]: &MessageDef{
				Service: nil,
				MsgId: pb.LoginResp_DEF_value["ID"],
				MsgCls: new(pb.LoginResp),
			},
			pb.ConnectGameServerReq_DEF_value["ID"]: &MessageDef{
				Service: nil,
				MsgId: pb.ConnectGameServerReq_DEF_value["ID"],
				MsgCls: new(pb.ConnectGameServerReq),
			},
			pb.ConnectGameServerResp_DEF_value["ID"]: &MessageDef{
				Service: nil,
				MsgId: pb.ConnectGameServerResp_DEF_value["ID"],
				MsgCls: new(pb.ConnectGameServerResp),
			},
			pb.QuitGameServerReq_DEF_value["ID"]: &MessageDef{
				Service: nil,
				MsgId: pb.QuitGameServerReq_DEF_value["ID"],
				MsgCls: new(pb.QuitGameServerReq),
			},
			pb.NotificationEvent_DEF_value["ID"]: &MessageDef{
				Service: nil,
				MsgId: pb.NotificationEvent_DEF_value["ID"],
				MsgCls: new(pb.NotificationEvent),
			},
		}
	}
}

type MessageDef struct{
	Service iface.IService
	MsgId int32
	// MsgCls reflect.Type
	MsgCls proto.Message
}

// func GetMessageClass(cmd int32) interface{}{
// 	msgDef := GetMessageDef(cmd)
// 	return reflect.New(msgDef.MsgCls.Elem()).Interface()
// }

func GetMessageClass(cmd int32) proto.Message{
	msgDef := GetMessageDef(cmd)
	return msgDef.MsgCls
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