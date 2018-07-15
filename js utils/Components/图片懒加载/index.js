(function(){
  // 元素是否处于视口中
  const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect()
    const { clientHeight, clientWidth } = document.documentElement
    
    return partiallyVisible ?
      ((top > 0 && top < clientHeight) || (bottom > 0 && bottom < clientHeight)) &&
      ((left > 0 && left < clientWidth) || (right > 0 && right < clientWidth)):
      top >= 0 && left >= 0 && bottom <= clientHeight && right <= clientWidth
  }

  // nodelist转化为array
  const convertListToArray = nodes => {
    var array = [];
    for (var i = 0, len = nodes.length; i < len; i++) {
      array.push(nodes[i]);
    }
    // }
    return array;
  }

  // 短时间内多次触发该函数只会执行一次
  function debounce(method, delay) {
    var timer = null;

    return function () {
      var context = this,
      args = arguments;
      clearTimeout(timer);

      timer = setTimeout(function () {
        method.apply(context, args);
      }, delay);
    }
  }

  var list = convertListToArray(document.querySelectorAll('img.lazy-loading'))
  
  onScroll = function(){
    if(list.length > 0){
     console.log(list);
      
      var loadedIndex = []
      list.forEach(function (node, index) {
        if(elementIsVisibleInViewport(node, true)){
          node.setAttribute('src', node.dataset.src)
          loadedIndex.unshift(index)
        }
      })
      loadedIndex.forEach(function(i){
        list.splice(i, 1)
      })
    }
  }

  window.onscroll = debounce(onScroll, 100)
  onScroll()
})()