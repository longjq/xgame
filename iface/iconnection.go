package iface

type IConnection interface{
	StartReader()
	StartWriter()
	ConnectionMade()
	
	Send([]byte) error
}