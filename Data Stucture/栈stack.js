// 先进先出
// push进pop出
class Stack extends Array {
  constructor(){
    super()
  }

  peek(){
    return this[this.length-1]
  }
  size(){
    return this.length
  }
  clear(){
    this.length = 0
    return this
  }
  print(){
    return this.toString()
  }
  isEmpty(){
    return this.length === 0
  }
}