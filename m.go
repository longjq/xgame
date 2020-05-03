package main

import (
	"fmt"
	// "github.com/gogf/gf/util/grand"
	// "reflect"
	// "xgame/message"
	// "xgame/example"
	// "xgame/pb"
	"xgame/config"
	// "github.com/golang/protobuf/proto"

	// "github.com/gogf/gf/util/gconv"

)
// type IHelo interface{
// 	Say()
// }
// type Helo struct{}
// func (self *Helo) Say(name string) int{
// 	fmt.Println("Helo.Say(*)",name)
// 	return 100
// }
// // var p proto.Message
// func a(i interface{}){
	// fmt.Println(fmt.Sprintf("%T", i),i)
// }

func main(){
	conf := config.NewSystemConfig("server1")
	fmt.Println(conf)
	// fmt.Println( grand.N(0,3))


	// var i interface{}
	// i = pb.ConnectGameServerReq_ID
	// cc := reflect.ValueOf(i)
	// fmt.Println(cc.Int())
	// x = pb.ConnectGameServerReq_ID
	// value, ok := x.(pb.ID)
	// a(pb.ConnectGameServerReq_ID)
	// fmt.Println(pb.ConnectGameServerReq_ID == 40)
	// // var h interface{}
	// h := &Helo{}
	// // ss := reflect.ValueOf(h)
	// // ss.MethodByName("Say").Call(nil)
	// var cmap = make(map[int32]func(string) int)
	// cmap[32] = h.Say
	// fmt.Println(cmap)
	// fn := cmap[32]
	// rs := fn("hhhhh")
	// fmt.Println(rs)
	// // m1 := pb.LoginReq{}
	
	// fmt.Println("------------------>",pb.NotificationEvent{Type:})
	// n := new(pb.NotificationEvent)
	// n.Type = &pb.NotificationType(5)
	// 	// Type: pb.NotificationType_N_KICK_OFF,
		// Type: pb.NotificationType(5),
	// t := pb.NotificationType(5)
	// var tt pb.NotificationType_N_KICK_OFF
	// nnn := &pb.NotificationEvent{
	// 	// Type: pb.NotificationType(5),
	// 	Type: func(b pb.NotificationType) *pb.NotificationType{return &b}(pb.NotificationType_N_KICK_OFF),
	// }
	// // fmt.Println(fmt.Sprintf("%T",pb.NotificationType(5)))
	// // n.Type = *pb.NotificationType(pb.NotificationType_N_KICK_OFF)
	// fmt.Println("------------------>",nnn.Type)
	// ext := proto.RegisteredExtensions((*pb.Mapping)(nil))
	// fmt.Println(ext)

	// for key, val := range ext {
	// 	fmt.Println(key, val)
	// 	Mapping[key] = &MessageDef{
	// 		Service: nil,
	// 		MsgId: key,
	// 		MsgCls: reflect.TypeOf(val.ExtensionType),
	// 	}
	// }

	// a := 100
	// b := gconv.String(a)
	// fmt.Printf("%T", b)
	// fmt.Println(b)

	// fmt.Println(pb.E_LoginReq.Field)
	// fmt.Println(message.Mapping)
	// example.SSS()

	// var a int32 = 1001
	// s := message.GetMessageClass(a)

	// m1 := pb.LoginReq{}
	// m1.Mobile = proto.String("2222asda隔壁老王sdsdad")
	// fmt.Println(m1)


    // // 对数据进行编码, 注意参数是message指针
    // mData1, err := proto.Marshal(&m1)
	// if err != nil {
	// 	fmt.Println("s")
	// }

	// err = proto.Unmarshal(mData1, s.(proto.Message))
	// if err != nil{
	// 	fmt.Println("n")
	// }

	// fmt.Println(s.(*pb.LoginReq).GetMobile())

}