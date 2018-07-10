## 作用

在特定的作用域中调用函数，等于设置函数体内this对象的值，以扩充函数赖以运行的作用域。

## 不同点

**apply** : `apply([thisObj [,argArray] ]);`

接收两个参数，一个是函数运行的作用域（函数内this的指向），另一个是以参数组成的数组。如果没有提供argArray和thisObj任何一个参数，那么Global对象将用作thisObj。

**call** : `call([thisObject[,arg1 [,arg2 [,...,argn]]]]);`

第一个参数与apply相同，但传入函数的参数需要一一列举。如果没有提供thisObj参数，那么Global对象被用于thisObj。


## 示例
```
function add(c,d){
  return this.a + this.b + c + d;
}

var s = {a:1, b:2};

console.log(add.call(s,3,4)); // 1+2+3+4 = 10
console.log(add.apply(s,[5,6])); // 1+2+5+6 = 14 
```