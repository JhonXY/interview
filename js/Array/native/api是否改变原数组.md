### 不会改变原数组
- concat: 返回拼接两个数组后的新数组
- filter: 返回一个验证函数返回为true的元素的新数组
- map: 返回数组元素执行函数后的新数组
- reduce: 返回累计处理的结果，不会改变原数组
- **slice**: 返回从start到end间（不包括end位）的元素浅拷贝到一个新数组。
- forEach: 数组所有元素执行参数函数，无返回
- join: 返回将数组所有原生连接成的一个字符串（可传参作为连接间的添加）
- some: 回调函数返回任何数组元素的truthy值，则返回true；否则为false。

### 会改变原数组
- pop: 删除数组尾部元素，返回该元素
- push: 添加参数到尾部，返回添加后的数组长度
- shift: 删除数组头部元素，返回该元素
- unshift: 添加参数到头部，返回添加后长度
- **splice**: start, deleteCount, input1, input2...,
  1. 从start位置开始删除[start，end]的元素。
  array.splice(start)
  2. 从start位置开始删除[start，Count]的元素。
  array.splice(start, deleteCount)    
  3. 从start位置删除deleteCount，并在之后添加item1, item2, ...元素。
  array.splice(start, deleteCount, item1, item2, ...)
- sort: 返回排序后数组，原数组被排序后数组替换
- reverse: 颠倒数组中元素的位置，并返回该数组的引用