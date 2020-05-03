package network

import (
	"io"
	// "fmt"
	// "encoding/binary"
)


func ClientMessageEncode(writer io.Writer) error{
	var err error
	// err = binary.Write(writer, binary.BigEndian, &self.Length)
	// err = binary.Write(writer, binary.BigEndian, &self.Command)
	// err = binary.Write(writer, binary.BigEndian, &self.Transaction)
	// err = binary.Write(writer, binary.BigEndian, &self.User)
	// err = binary.Write(writer, binary.BigEndian, &self.Result)
	// err = binary.Write(writer, binary.BigEndian, &self.Route)
	return err
}

func ClientMessageDecode(reader io.Reader) error{
	var err error
	// err = binary.Read(reader, binary.BigEndian, &self.Length)
	// err = binary.Read(reader, binary.BigEndian, &self.Command)
	// err = binary.Read(reader, binary.BigEndian, &self.Transaction)
	// err = binary.Read(reader, binary.BigEndian, &self.User)
	// err = binary.Read(reader, binary.BigEndian, &self.Result)
	// err = binary.Read(reader, binary.BigEndian, &self.Route)
	return err
}
