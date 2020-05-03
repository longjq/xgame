#!/bash/bin

#./protoc --go_out=.  *.proto
./protoc --plugin=./protoc-gen-go --go_out=. ./*.proto
