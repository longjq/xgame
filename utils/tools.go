package utils

// redis中的字符串切片转map
func StrToMap(sts []string) map[string]string{
	var lastK string
	cmap := make(map[string]string)
	for k, v := range sts {
		if k % 2 == 0{
			lastK = v
			cmap[string(lastK)] = "nil"
		}else{
			cmap[string(lastK)] = v
		}
	}
	return cmap
}