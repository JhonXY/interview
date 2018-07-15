const initializeArrayWithRange = (end, start = 0) => 
  Array.from({length: end - start}).map((v, i) => i + start)

// 传入length生成需要长度空数组，再返回需要的值
// 不传start参数,start则默认为0