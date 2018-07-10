// 利用Math.random返回一个小于1的小数
// 与length相乘，再去除小数位
// 获取该值位置的元素
// 该函数也适用于string
const sample = v =>
  v[Math.floor(Math.random() * v.lengh)]