package iface

type IAccessRawMessage interface{
	GetData() *[]byte
	GetReceiveTime() int64
}