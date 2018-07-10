// 参数el 元素节点
// 参数partiallyVisible 部分可见情况，默认为false
// 即完全可见时才返回true
// 如partiallyVisible传入true，部分可见也可返回true
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  // getBoundingClientRect 代表元素相对视口左上角的一些坐标信息
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { clientHeight, clientWidth } = document.documentElement
  // innerHeight是一个browser环境下的全局变量，始终表示视口高度（如有滚动条就包括滚动条）
  // 部分可见允许的情况下只要有一点可见即返回true
  // return partiallyVisible
  //   ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
  //   ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
  //   : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
  
  return partiallyVisible ?
    ((top > 0 && top < clientHeight) || (bottom > 0 && bottom < clientHeight)) &&
    ((left > 0 && left < clientWidth) || (right > 0 && right < clientWidth)):
    top >= 0 && left >= 0 && bottom <= clientHeight && right <= clientWidth
}
  
// 这里其实使用innerHeight和innerWidth来做基准是不准确的
// 因为这两个值都会在滚动条出现时将滚动条的高宽值也包括进去
// 而滚动条会遮挡元素
// 所以这里最好使用document.documentElement的clientHeight, clientWidth属性来做基准更好。