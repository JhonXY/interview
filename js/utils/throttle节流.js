function throttle(method, context) {
  clearTimeout(method.tId);

  method.tId = setTimeout(function () {
    method.call(context);
  }, 500);
}

// 合理点
function throttle(method, delay) {
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