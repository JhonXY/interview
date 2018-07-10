class Node {
  constructor(ele){
    this.element = ele
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.length = 0
    this.head = null
  }

  append(ele){
    let node = new Node(ele), { head } = this
    if(head === null){
      this.head = node
    } else {
      let current = head
      // 找到next为null的节点，将该节点添加到其上
      while(current.next!==null){
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  removeAt(pos){
    let { length, head } = this,
    current = this.head,
    index = 0,
    previous

    if(pos > -1 && pos < length){
      // 移除第一位
      if(pos === 0){
        // 如果有next则将其作为head，如果无则是null自动成为head
        head.next && (this.head = current.next)
      } else {
        // cur指针循环向前直到找到当前node
        while(index++ < pos){
          previous = current
          current = current.next
        }
        // 将当前node去除，连接previous和next
        previous.next = current.next
      }
      // 减少链表长度，返回去除的值
      this.length --
      return current.element
    } else {
      return null
    }
  }
}
