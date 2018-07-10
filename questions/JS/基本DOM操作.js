// 创建节点

// 创建一个DOM片段
var frame = document.createDocumentFragment()

// 创建一个具体元素
var ele = document.createElement('div')

// 创建一个文本节点
var text = createTextNode('1111')

// 操作
frame.appendChild(ele) // 添加（在节点内最后出现）
frame.removeChild(ele)  // 删除
frame.replaceChild() // 替换
frame.insertBefore(ele) // 插入（在节点内最前出现）

//  查找

getElementsByTagName() //通过标签名称

getElementsByName() //通过元素的Name属性的值

getElementById() //通过元素Id，唯一性

document.querySelector('.dfdf') // 类似jQuery（获取第一个）

document.querySelectorAll('.dfdf') // 获取所有符合的