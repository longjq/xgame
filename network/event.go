package network

import (
	"xgame/iface"
	"bytes"
	"encoding/binary"

)

const (
	EVENT_MODE_ASYNC = 0
	EVENT_MODE_SYNC_REQ = 1
	EVENT_MODE_SYNC_RESP = 2
)

const (
	LENGTH_OF_HEADER = 24
)

func transactionId() int32{
	return -1
}

// 24个字节
// mode + length + src id + dst id + type + transactionId + param1 + param2 
type Event struct{
	Mode int32
	Length int32
	SrcId int32
	DstId int32
	EventType int32
	TranId int32
	Param1 int32
	Param2 int32
	IData interface{}
	Data []byte
}

func NewCreateEvent(sid int32, did int32, eventType int32, param1 int32, param2 int32, eventData []byte) *Event{
	length := LENGTH_OF_HEADER + len(eventData)

	return &Event{
		Mode: EVENT_MODE_ASYNC,
		Length: int32(length),
		SrcId: sid,
		DstId: did,
		EventType: eventType,
		TranId: transactionId(),
		Param1: param1,
		Param2: param2,
		Data: eventData,
	}
}

func (self *Event) GetEventType() int32{
	return self.EventType
}
func (self *Event) GetParam1() int32{
	return self.Param1
}
func (self *Event) GetParam2() int32{
	return self.Param2
}
func (self *Event) GetEventData() []byte{
	return self.Data
}
func (self *Event) ToStream() ([]byte, error){

	// 加起来得到最后的长度
	eventLength := int32(len(self.Data) + LENGTH_OF_HEADER)

	var err error
	writer := bytes.NewBuffer([]byte{})
	err = binary.Write(writer, binary.BigEndian, &self.Mode)
	err = binary.Write(writer, binary.BigEndian, &eventLength)
	err = binary.Write(writer, binary.BigEndian, &self.SrcId)
	err = binary.Write(writer, binary.BigEndian, &self.DstId)
	err = binary.Write(writer, binary.BigEndian, &self.EventType)
	err = binary.Write(writer, binary.BigEndian, &self.TranId)
	err = binary.Write(writer, binary.BigEndian, &self.Param1)
	err = binary.Write(writer, binary.BigEndian, &self.Param2)
	if err != nil {
		return nil, err
	}

	return append(writer.Bytes(), self.Data...), nil
}

func CreateEventFromStream(buf *[]byte) (int,iface.IEvent){
	l := len(*buf)
	if l < SIZEOF_HEADER {
		return -1, nil
	}

	// dp := NewDataPack()
	// dp.Decode(bytes.NewReader(*buf))
	// if int32(l) < dp.Length {
		// return -2, nil
	// }

	return 0, nil
	// return 0, CreateExistedEvent(dp.)
}

func CreateExistedEvent(mode int, length int32, sid int32, did int32, eventType int32, tid int32, param1 int32, param2 int32, eventData []byte){

}

