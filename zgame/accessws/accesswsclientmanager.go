package accessws

import (
	"errors"
	"fmt"
	"sync"
)

type AccessWSConnManager struct {
	connections map[int32]*AccessWSClientConnection // 管理的连接信息
	connLock    sync.RWMutex               // 读写连接的读写锁
}

// 创建一个连接类
func NewAccessWSConnManager() *AccessWSConnManager {
	return &AccessWSConnManager{
		connections: make(map[int32]*AccessWSClientConnection),
	}
}

// 添加连接
func (connMgr *AccessWSConnManager) Add(conn *AccessWSClientConnection) {
	// 保护共享资源，加写锁
	connMgr.connLock.Lock()
	defer connMgr.connLock.Unlock()

	// 将conn添加到connMgr中
	connMgr.connections[conn.GetConnID()] = conn

	fmt.Println("connection add to ConnManager successfully: conn num = ", conn.GetConnID(), "ConnManager.connections = ", connMgr.Len())
}

// 根据connId获得具体的连接
func (connMgr *AccessWSConnManager) Get(connId int32) (*AccessWSClientConnection, error) {
	// 保护共享资源，加读锁
	connMgr.connLock.RLock()
	defer connMgr.connLock.RUnlock()

	if conn, ok := connMgr.connections[connId]; ok {
		return conn, nil
	} else {
		return nil, errors.New("connection not found")
	}
}

// 获得当前connMgr的管理的连接数
func (connMgr *AccessWSConnManager) Len() int {
	return len(connMgr.connections)
}

// 删除连接
func (connMgr *AccessWSConnManager) Remove(conn *AccessWSClientConnection) {
	// 保护共享资源，加写锁
	connMgr.connLock.Lock()
	defer connMgr.connLock.Unlock()

	// 删除连接信息
	delete(connMgr.connections, conn.GetConnID())

	fmt.Println("connection Remove ConnID=", conn.GetConnID(), " successfully: conn num=", connMgr.Len(), " remove connId=", conn.GetConnID())
}

// 清除并停止所有连接
func (connMgr *AccessWSConnManager) ClearConn() {
	// 保护共享资源，加写锁
	connMgr.connLock.Lock()
	defer connMgr.connLock.Unlock()

	// 停止并删除全部的连接信息
	for connId, conn := range connMgr.connections {
		// 停止
		conn.Stop()
		// 删除
		delete(connMgr.connections, connId)
	}

	fmt.Println("Clear All Connections successfully: conn num ", connMgr.Len())
}
