!(function () {
  let frag = document.createDocumentFragment(),
  container = document.getElementsByTagName('ul')[0],
  left = document.querySelector('.left'),
  right = document.querySelector('.right'),
  num = 3,
  init = 0,
  timer = null
  
  function imgContainer(src) {
    let img = document.createElement('img')
    img.src = `./imgs/${src}.jpg`
    img.setAttribute("class", "swiper-child")
    return img
  }

  for (let i = 0; i < num; i++) {
    let li = document.createElement('li')
    li.appendChild(imgContainer(i))
    frag.appendChild(li)
  }

  // 用于无缝切换
  let final = document.createElement('li')
  final.appendChild(imgContainer(0))

  frag.appendChild(final)
 
  container.appendChild(frag)

  let leftEvent = () => {
    // 跳到最后
    if (init === 0) {
      container.style.transition = 'none'
      container.style.transform = `translateX(-${num*400}px)`
      setTimeout(() => {
        container.style.transition = ".5s all"
        init = num
        turnleft()
        init = num - 1
      }, 100)
    } else {
      turnleft()
      init -= 1
    }
  }
  // left.addEventListener('click', leftEvent)
  left.addEventListener('click', throttle(leftEvent, 600))
  let rightEvent = () => {
    // 最后一张图跳第一张
    if (init === num - 1) {
      turnRight()
      setTimeout(() => {
        container.style.transition = 'none'
        container.style.transform = `translateX(0)`
        init = 0
      }, 500)
      setTimeout(() => {
        container.style.transition = ".5s all"
      }, 600)
    } else {
      turnRight()
      init += 1
    }
  }
  right.addEventListener('click', throttle(rightEvent, 600))

  
  function turnleft() {
    let dispatch = (init - 1) * 400
    container.style.transform = `translateX(-${dispatch}px)`
  }
  function turnRight() {
    let dispatch = (init + 1) * 400
    container.style.transform = `translateX(-${dispatch}px)`
  }

  let loop = function () {
    timer = setInterval(() => {
      rightEvent()
    }, 3000)
  }
  
  let wrap = document.querySelector('.container')
  wrap.addEventListener('mouseover', () => {
    clearInterval(timer)
  })

  wrap.addEventListener('mouseout', () => {
    loop()
  })
  
  loop()

  // 去抖函数
  function throttle(method, duration, delay) {
    var timer = null,
      // 记录下开始执行函数的时间
      begin = new Date();

    return function () {
      var context = this,
        args = arguments,
        // 记录下当前时间
        current = new Date();
      // 函数节流里的思路
      clearTimeout(timer);

      // 记录下的两个时间相减再与duration进行比较
      if (current - begin >= duration) {
        method.apply(context, args);
        begin = current;
      } else {
        timer = setTimeout(function () {
          method.apply(context, args);
        }, delay);
      }
    }
  }
})()