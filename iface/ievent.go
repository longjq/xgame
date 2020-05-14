package iface

type IEvent interface{
	ToStream() ([]byte, error)

	GetSrcId() int32
	GetParam1() int32
	GetParam2() int32
	GetEventType() int32
	GetEventData() []byte
}