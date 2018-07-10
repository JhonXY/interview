! function (window) {
  const DEFAULT = {
    auto: 1,
    interval: 3000,
    effect: 'ease-out'
  }

  class Slider {
    constructor(el, options={}) {
      this.sliderWrap = document.querySelector(el)
      this.index = 0
      this.settings = Object.assign({}, DEFAULT, options)
      this.init_data()
    }
    
    static set_position(obj, dis) { //更改轮播图位置
      obj.style.webkitTransform = `translate3d(${dis}px,0,0)` //兼容安卓版UC
      obj.style.transform = `translate3d(${dis}px,0,0)`
    }
    static set_focusIcon(obj, x) { //设置轮播图ICON焦点
      Array.from(obj.children).forEach((ele, index) =>
        ele.className = index === x ? 'active' : ''
      )
    }

    init_data() {
      this.get_element()
    }

    get_element() {
      let oUl = this.sliderWrap.querySelector('ul')
    }

  }

  window.Slider = Slider 
}(window)