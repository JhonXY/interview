const loadImage = (function () {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function (src) {
      imgNode.src = src
    }
  }
})()

const proxyImage = (function () {
  const img = new Image()
  img.onload = function() {
    console.log(this)
    loadImage.setSrc(this.src)
  }
  return {
    setSrc: function(src) {
      loadImage.setSrc('https://oimagec1.ydstatic.com/image?id=-776080481947776892&product=dict-homepage&w=200&h=150&fill=0&cw=200&ch=150&sbc=0&cgra=CENTER')
      img.src = src
    }
  }
})()

proxyImage.setSrc('https://oimageb7.ydstatic.com/image?id=677491471763263828&product=dict-homepage&w=200&h=150&fill=0&cw=200&ch=150&sbc=0&cgra=CENTER&of=jpeg')