let add = (function () {
  let now = 0;
  return {
    doAdd: function () {
      now++;
      console.log(now);
    }
  }
})()

// 利用立即执行函数做封闭环境
// 这样返回出来的函数能够始终利用闭包内的变量
// 且该变量不会污染当前环境
