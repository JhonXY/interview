/**
 * @param n: an integer
 * @return: an ineger f(n)
 */
// 递归实现，运行速度太慢
const fibonacci = function (n) {
  if (n === 1) {
    return 0
  } else if (n === 2) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

// 非递归实现，通过
const fibonacci = function (end) {
  if (end <= 2) {
    if (end === 1) {
      return 0
    } else if (end === 2) {
      return 1
    } else {
      return 'err'
    }
  } else {
    var num1 = 0,
      num2 = 1,
      num3;
    var arr = [0, 1];
    for (var i = 3; i <= end; ++i) {
      num3 = num1 + num2;
      num1 = num2;
      num2 = num3;
      if (i >= end) {
        break;
      }
    }
    return num3
  }
}