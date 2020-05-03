package config

import(
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/util/gconv"
)

type SystemConf struct{
	Servers []*ServerConfig
	Services map[string][]*ServiceConfig

	MySelf *ServerConfig
	MySelfName string
}

func NewSystemConfig(mySelfName string) *SystemConf {
	conf := &SystemConf{
		MySelfName: mySelfName,
		Services: make(map[string][]*ServiceConfig),
	}

	cfg := g.Cfg()

	for i, _ := range cfg.GetArray("servers"){
		// 加载server
		srvName := cfg.GetString("servers."+gconv.String(i)+".name")
		s := &ServerConfig{
			Name: srvName,
			IP: cfg.GetString("servers."+gconv.String(i)+".ip"),
			Port: cfg.GetInt("servers."+gconv.String(i)+".port"),
			Services: make(map[int32]*ServiceConfig),
		}
		
		// 加载service
		for j, _ := range cfg.GetArray("servers."+gconv.String(i)+".services") {
			svcName := cfg.GetString("servers."+gconv.String(i)+".services."+gconv.String(j)+".name")
			if svcName == "accesswsservice" {
				s.Options = map[string]string{
					"access_server_ip": cfg.GetString("servers."+gconv.String(i)+".services."+gconv.String(j)+".access_server_ip"),
					"access_server_port": cfg.GetString("servers."+gconv.String(i)+".services."+gconv.String(j)+".access_server_port"),
				}
			}
			sv := &ServiceConfig{
				Name: svcName,
				Id: cfg.GetInt32("servers."+gconv.String(i)+".services."+gconv.String(j)+".id"),
				Host: s,
			}

			s.Services[sv.Id] = sv
			
			if conf.Services[svcName] == nil {
				conf.Services[svcName] = make([]*ServiceConfig, 0)
				conf.Services[svcName] = append(conf.Services[svcName], sv)
			}else{
				conf.Services[svcName] = append(conf.Services[svcName], sv)
			}
		}
		conf.Servers = append(conf.Servers, s)

		if s.Name == conf.MySelfName {
			conf.MySelf = s
		}
	}

	return conf
}

type ServerConfig struct{
	Name string
	Port int
	IP string

	Services map[int32]*ServiceConfig

	Options map[string]string
}

type ServiceConfig struct{
	Host *ServerConfig
	Id int32
	Name string

}