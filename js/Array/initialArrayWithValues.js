const initializeArrayWithValues = (n, value = 0) =>
  Array(n).fill(value)

// 直接用Array构造函数创建n位数组，再用fill指定值填满数组