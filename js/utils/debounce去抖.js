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