// 优先队列
class QueueElement {
  constructor(ele, pro) {
    this.element = ele;
    this.proprity = pro
  }
}

class Queue extends Array {
  constructor(){
    super()
  }

  // 入队
  enqueue(ele, pro){
    let queueEle = new QueueElement(ele, pro)

    if(this.isEmpty()){
      this.push(queueEle)
    } else {
      // 判断是否添加
      let added = false
      // 遍历当前队列，寻找优先级刚好大于该元素的元素位置，在当前位置插入该元素
      for (let i=0,l=this.length; i<l; i++) {
        queueEle.proprity < this[i].proprity && this.splice(i, 0, queueEle);
        added = true
        break
      }
      // 若最终都没有添加则添加到队列尾
      !added && this.push(queueEle)
    }
  }

  push(ele, pro=-1){
    this.enqueue(ele, pro)
  }
  // 出队
  dequeue(){
    return this.shift()
  }

  // 获取队列第一位
  front(){
    if(this.isEmpty()){
      return 'this queue is empty'
    } else {
      return this[0]
    }
    // return this[0] || 'this queue is empty'
  }

  isEmpty(){
    return this.length === 0
  }

  clear(){
    this.length = 0
    return this
  }

  size(){
    return this.length
  }

  print(){
    return this.toString()
  }
}

