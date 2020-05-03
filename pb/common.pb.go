// Code generated by protoc-gen-go. DO NOT EDIT.
// source: common.proto

package pb

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type NotificationEvent_DEF int32

const (
	NotificationEvent_ID NotificationEvent_DEF = 1100
)

var NotificationEvent_DEF_name = map[int32]string{
	1100: "ID",
}

var NotificationEvent_DEF_value = map[string]int32{
	"ID": 1100,
}

func (x NotificationEvent_DEF) Enum() *NotificationEvent_DEF {
	p := new(NotificationEvent_DEF)
	*p = x
	return p
}

func (x NotificationEvent_DEF) String() string {
	return proto.EnumName(NotificationEvent_DEF_name, int32(x))
}

func (x *NotificationEvent_DEF) UnmarshalJSON(data []byte) error {
	value, err := proto.UnmarshalJSONEnum(NotificationEvent_DEF_value, data, "NotificationEvent_DEF")
	if err != nil {
		return err
	}
	*x = NotificationEvent_DEF(value)
	return nil
}

func (NotificationEvent_DEF) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{0, 0}
}

type NotificationEvent struct {
	Type                 *NotificationType `protobuf:"varint,1,req,name=type,enum=pb.NotificationType" json:"type,omitempty"`
	Param1               *int32            `protobuf:"varint,2,opt,name=param1" json:"param1,omitempty"`
	Param2               *string           `protobuf:"bytes,3,opt,name=param2" json:"param2,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *NotificationEvent) Reset()         { *m = NotificationEvent{} }
func (m *NotificationEvent) String() string { return proto.CompactTextString(m) }
func (*NotificationEvent) ProtoMessage()    {}
func (*NotificationEvent) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{0}
}

func (m *NotificationEvent) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NotificationEvent.Unmarshal(m, b)
}
func (m *NotificationEvent) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NotificationEvent.Marshal(b, m, deterministic)
}
func (m *NotificationEvent) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NotificationEvent.Merge(m, src)
}
func (m *NotificationEvent) XXX_Size() int {
	return xxx_messageInfo_NotificationEvent.Size(m)
}
func (m *NotificationEvent) XXX_DiscardUnknown() {
	xxx_messageInfo_NotificationEvent.DiscardUnknown(m)
}

var xxx_messageInfo_NotificationEvent proto.InternalMessageInfo

func (m *NotificationEvent) GetType() NotificationType {
	if m != nil && m.Type != nil {
		return *m.Type
	}
	return NotificationType_N_BROADCAST
}

func (m *NotificationEvent) GetParam1() int32 {
	if m != nil && m.Param1 != nil {
		return *m.Param1
	}
	return 0
}

func (m *NotificationEvent) GetParam2() string {
	if m != nil && m.Param2 != nil {
		return *m.Param2
	}
	return ""
}

func init() {
	proto.RegisterEnum("pb.NotificationEvent_DEF", NotificationEvent_DEF_name, NotificationEvent_DEF_value)
	proto.RegisterType((*NotificationEvent)(nil), "pb.NotificationEvent")
}

func init() { proto.RegisterFile("common.proto", fileDescriptor_555bd8c177793206) }

var fileDescriptor_555bd8c177793206 = []byte{
	// 159 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x49, 0xce, 0xcf, 0xcd,
	0xcd, 0xcf, 0xd3, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x2a, 0x48, 0x92, 0xe2, 0x4b, 0xce,
	0xcf, 0x2b, 0x2e, 0x49, 0xcc, 0x2b, 0x81, 0x88, 0x49, 0xf1, 0x14, 0x97, 0x14, 0x95, 0x26, 0x43,
	0x79, 0x4a, 0xb5, 0x5c, 0x82, 0x7e, 0xf9, 0x25, 0x99, 0x69, 0x99, 0xc9, 0x89, 0x25, 0x99, 0xf9,
	0x79, 0xae, 0x65, 0xa9, 0x79, 0x25, 0x42, 0x1a, 0x5c, 0x2c, 0x25, 0x95, 0x05, 0xa9, 0x12, 0x8c,
	0x0a, 0x4c, 0x1a, 0x7c, 0x46, 0x22, 0x7a, 0x05, 0x49, 0x7a, 0xc8, 0x8a, 0x42, 0x2a, 0x0b, 0x52,
	0x83, 0xc0, 0x2a, 0x84, 0xc4, 0xb8, 0xd8, 0x0a, 0x12, 0x8b, 0x12, 0x73, 0x0d, 0x25, 0x98, 0x14,
	0x18, 0x35, 0x58, 0x83, 0xa0, 0x3c, 0xb8, 0xb8, 0x91, 0x04, 0xb3, 0x02, 0xa3, 0x06, 0x27, 0x54,
	0xdc, 0x48, 0x89, 0x8f, 0x8b, 0xd9, 0xc5, 0xd5, 0x4d, 0x88, 0x9d, 0x8b, 0xc9, 0xd3, 0x45, 0xe0,
	0x0c, 0x07, 0x20, 0x00, 0x00, 0xff, 0xff, 0x0b, 0x66, 0x7e, 0xa6, 0xaf, 0x00, 0x00, 0x00,
}