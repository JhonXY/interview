// reduce的作用是用数组做细分累加操作
// 这里传入0做初始值
// 对比传入的value与数组中的项是否一样，一样则返回加1的值，
// 不一样则原样返回，最后返回所有处理完后的相加值
const countOccurrences = (arr, value) =>
  arr.reduce((pre, cur) => 
    cur === value ? pre + 1: pre + 0, 0
  )

// 在reduce中，accumulator始终为传入reduce中的回调每次调用后返回的值
// reduce分两种情况
// 1. 传入initValue
// 第一次执行，accumulator的值是initValue,
// currentValue的值是调用reduce的数组的第一位[0]，则currentIndex是1
// 2. 不传入initValue
// 第一次执行，accumelator的值是调用reduce数组的第一位[0],
// currentValue的值是调用reduce的数组的第二位[1]，则currentIndex是2
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
  console.log(currentIndex);
  
  // return accumulator + currentValue;
},
// initValue
);