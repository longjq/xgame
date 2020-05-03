package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"flag"
	// "gopkg.in/ini.v1"
	"xgame/config"
	"xgame/network"
	// "xgame/proto"

	// "reflect"
	// "xgame/pb"
	// "github.com/golang/protobuf/proto"
	"xgame/zgame/hall"
	"xgame/zgame/index"
	"xgame/zgame/room"
	"xgame/zgame/accessws"

)

var (
	mySelfName string

)
func init() {
	flag.StringVar(&mySelfName, "server", "server1", "usage for server")
}

func main(){

	// base.MountService方法为挂载服务，必须位于最前面
	// base.MountService(hall.NewHallService())
	// base.MountService(index.NewIndexService())
	
	// 执行初始化
	// // sq:="100sss"
	// // svc := zgame.MapService[10]
	// // svc.Initialize()
	// fmt.Println(base.MapService)

	// fmt.Println("=====>")
	// // 定义假proto数据
	// m := pb.LoginReq{}
	// m.Mobile = proto.String("asad")
	// fmt.Println(m)


    // // 对数据进行编码, 注意参数是message指针
    // mData, err := proto.Marshal(&m)
 
    // if err != nil {
    //     fmt.Println("Error1: ", err)
    //     return
	// }
	
	// m1 := pb.LoginReq{}
	// m1.Mobile = proto.String("2222asdasdsdad")
	// fmt.Println(m1)


    // // 对数据进行编码, 注意参数是message指针
    // mData1, err := proto.Marshal(&m1)
 
    // if err != nil {
    //     fmt.Println("Error1: ", err)
    //     return
    // }

	// fmt.Println("======>加密后的数据：",mData,mData1)






	// var umData pb.LoginReq
	// um := proto.Unmarshal(mData, &umData)
	
 
    // if um != nil {
    //     fmt.Println("Error2: ", um)
    //     return
	// }
	

	// fmt.Println("====》解密后的数据：",*umData.Mobile)



	// m2 := pb.LoginReq{}
	// fmt.Println("=====>地2个请求:",m2)

	// var _mapping = make(map[int32]reflect.Type)
	// ext := proto.RegisteredExtensions((*pb.Mapping)(nil))
	// fmt.Println(ext[1001])
	// for key, val := range ext {
	// 	fmt.Println(key, reflect.TypeOf(val.ExtensionType))

	// 	// v := reflect.Indirect(reflect.New(reflect.TypeOf(val.ExtensionType).Elem())).Interface().(proto.Message)
	// 	// fmt.Printf("%S,%S",key,v)
	// 	// fmt.Println(reflect.New(reflect.TypeOf(val.ExtensionType).Elem()))
	// 	_mapping[key] = reflect.TypeOf(val.ExtensionType)
	// 	// fmt.Println(reflect.New(reflect.TypeOf(v)).Type())
	// }

	// s := reflect.New(_mapping[1001].Elem()).Interface()
	// fmt.Println(s)
	


	// // unstruct := reflect.New(reflect.TypeOf(_mapping[1001].Elem())).Interface()
	// // s := reflect.New(_mapping[1001].Elem()).Interface{}
	// err1 := proto.Unmarshal(mData, s.(proto.Message))
	// if err1 != nil {
	// // // // 	// return err1
	// 	fmt.Println(err1)
	// }

	// fmt.Println(s)
	// fmt.Printf("%T",s)

	// fmt.Println("=======================>")

	// s1 := reflect.New(_mapping[1001].Elem()).Interface()
	// fmt.Println(s1)
	


	// // unstruct := reflect.New(reflect.TypeOf(_mapping[1001].Elem())).Interface()
	// // s := reflect.New(_mapping[1001].Elem()).Interface{}
	// err2 := proto.Unmarshal(mData1, s1.(proto.Message))
	// if err2 != nil {
	// // // // 	// return err1
	// 	fmt.Println(err2)
	// }

	// fmt.Println(s1)
	// fmt.Printf("%T",s1)








	// // fmt.Printf("%T",_mapping[1001])
	// // a := _mapping[1001]
	// // a.Mobile = proto.St/ring("wqwqwq")
	// // fmt.Println(a)
	// // aa := a{}
	// // aa.Mobile = proto.String("1qqqq")
	// // b := _mapping[1001]
	// // bb := b{}
	// // fmt.Printf("%T,%T", a,b)
	
	flag.Parse()

	// mySelfName := "server1"

	// 加载配置文件
	// cfg, err := ini.Load("my.ini")
	// if err != nil{
		// fmt.Println("加载ini配置文件出错",err)
		// os.Exit(-1)
	// }

	// 构建配置文件对象
	conf := config.NewSystemConfig(mySelfName)
	// 构建服务器对象
	server := network.NewServer(conf)

	// 安装服务
	server.InstallService(
		hall.NewHallService("hallservice"),
		index.NewIndexService("indexservice"),
		room.NewRoomService("roomservice"),
		accessws.NewAccessWSService("accesswsservice"),
	)

	// // 协程运行服务器
	// go server.Run()

	// 监听退出信号
	sigs := make(chan os.Signal, 1)
	done := make(chan bool, 1)
	signal.Notify(sigs, os.Interrupt, os.Kill, syscall.SIGTERM)
	
	// 协程执行监听退出信号
	go func(){
		sig := <- sigs
		fmt.Println(sig)
		fmt.Println("receive exit signal，notify server exit...")
		done <- true
	}()

	// 接收到退出信号，执行关闭前的业务
	<- done
	fmt.Println("exiting...")
	server.ShutDown()
	fmt.Println("all done!!!")

}
