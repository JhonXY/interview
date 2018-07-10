const mapObject = (arr, fn) => 
  (a => 
    // 这个括号是必须要的，不然here的语句不会执行
    (
      a = [arr, arr.map(fn)],  // here
      a[0].reduce((acc, val, ind) => 
        (acc[val] = a[1][ind], acc), {})
    )
  )()


// 这里利用了逗号（,），在return中的特性
// 1. 有多个返回值时返回最后一个值
// return 1,2,4,5,6 // 6
// 2. 改变运行优先级数
alert(
  (() => 1)(), 
  (() => 2)() // 此处未执行到
) // 1
alert(
  (
    (() => console.log(1))(),
    (() => 2)()
  )
) //log:1, 2 ; 逗号前后都执行到了

// 3. 在流程控制语句中
// 可以简化语句
var a,b
// if后括号里的所有语句都会被执行，且最右作为if的判断条件
if(a=1, b){
  console.log(a);
} // 1
if(a=2, b=1, c = null){
  console.log(a);
} //