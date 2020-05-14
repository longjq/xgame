package main

import (
	// pb包是我用proto生成后的go文件夹，里面定义了很多消息体
	"xgame/pb"    
	"fmt"
	//官方的proto库，提供了序列化和反序列化的功能
	"github.com/golang/protobuf/proto"   
	// "reflect"
	"xgame/network"
)

type pp struct{
	ibody interface{}
}

func pack(s interface{}) *pp{
	p := &pp{
		ibody: s,
	}

	return p
}

func main(){

		ext := proto.RegisteredExtensions((*pb.Mapping)(nil))
		for key, val := range ext {
			
			fmt.Println(key, val)
			// fmt.Println(key,reflect.New(reflect.TypeOf(val).Elem()))
			// fmt.Println(key,fmt.Sprintf("%T", reflect.New(reflect.TypeOf(val).Elem().)))
			if key == 1{
				login := &pb.LoginReq{
					Mobile:proto.String("a"),
				}

				var iii proto.Message
				iii = login
			
				loginBytes,_ := proto.Marshal(iii)
				fmt.Println(val,"加密后",loginBytes)
			
				deLogin := network.GetMessageClass(1)
				// deLogin := reflect.New(network.Mapping[1].MsgCls.Elem())
				// l := &pb.LoginReq{}
				// deLogin := reflect.New(reflect.TypeOf(val).Elem())
				err1 := proto.Unmarshal(loginBytes, deLogin.(proto.Message))
				if err1 != nil{
					fmt.Println("n")
				}
				// fmt.Println("解密",loginBytes,deLogin.(reflect.TypeOf(network.Mapping[1].MsgCls)))

				// r := reflect.New(network.Mapping[1].MsgCls.Elem())
				// r.Mobile = proto.String("hhhh")
				// fmt.Println(fmt.Sprintf("%T",deLogin.FieldByName()))
				// fmt.Println(reflect.TypeOf(deLogin).FieldByName("mobile"))
				// fmt.Println(deLogin.(pb.LoginReq))
			}
			
		


		}
	// var login interface{}

	// req := pb.LoginReq{}
	// req.Mobile = proto.String("a")
	// reqBytes ,_:= proto.Marshal(&req)
	// fmt.Println(reqBytes)

	// msg := network.CreateClientMessage(req, 40, -1)
	// fmt.Println(msg.IBody.)


	// login := &pb.LoginReq{
	// 	Mobile:proto.String("a"),
	// }

	// loginBytes,_ := proto.Marshal(login)
	// fmt.Println("加密后",loginBytes)


	// deLogin := network.GetMessageClass(1)
	// // deLogin := reflect.New(network.Mapping[1].MsgCls.Elem())
	// // l := &pb.LoginReq{}
	// err := proto.Unmarshal(loginBytes, deLogin.(proto.Message))
	// if err != nil{
	// 	fmt.Println("n")
	// }
	// fmt.Println("解密",loginBytes,deLogin)



	// done,c := deLogin.(pb.LoginReq)
	// fmt.Println(done.GetMobile(),c)




	// s := reflect.ValueOf(deLogin).Elem().FieldByName("Mobile")
	// fmt.Println(s.String())

	// elem := reflect.ValueOf(deLogin).Elem()
	// lllen := elem.NumField()
	// for i := 0; i < lllen; i++ {
	// 	fmt.Println(elem.Field(i), elem.Type().Field(i))
	// }

	// fmt.Println(*s.Stirng())
	// fmt.Println(deLogin.GetMobile())


	// fmt.Println("login,",deLogin.(reflect.TypeOf(network.Mapping[1].MsgCls).Elem()))
	// fmt.Println(reflect.TypeOf(network.Mapping[1].MsgCls).Elem())




	// msg := pack(pb.LoginReq{})
	// msgType := reflect.TypeOf(reflect.ValueOf(&msg.ibody))
	// fmt.Println(msgType)


	// err = proto.Unmarshal(mData1, s.(proto.Message))
	// if err != nil{
	// 	fmt.Println("n")
	// }
	// fmt.Println(network.Mapping[40].MsgCls)

















	// proto.Un

	// fmt.Println(network.Mapping[40].msgCls)

	// // 通过pb包构造一个LoginReq消息体
	// login := pb.LoginReq{}
	// login.UserName = "helo"

	// // 此处把login消息序列化，得到login消息体的字节数组
	// loginBytes := proto.Marshal(&login)

	// // 包装下这个消息体
	// msg := &Msg{
	// 	id: 100,
	// 	bodyLength: len(loginBytes),
	// 	ibody: loginBytes
	// }

	// // 这个时候我就可用通过tcp发送消息了，此处略去发送内容。。。

	// // 此处往下是服务器收到消息了，开始反序列话
	// recvMsg := tcp.recv()

	
}

// func CreateClientMessage(msgBody interface{}, cmd int32, user int32) *ClientMessage{
// 	msg := NewClientMessage()
// 	msg.Header = NewHeader(0,0,0,0,0,0)
// 	msg.IBody = msgBody
// 	msg.Header.User = user
// 	msg.Header.Command = cmd
// 	msg.Header.Transaction = -1
// 	msg.Header.Result = 0
// 	return msg
// }