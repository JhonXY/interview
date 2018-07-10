### instanceof

```
a instanceof b
```
用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。这个是原理的解释。也就是 a 的原型链上是否有 b。

最常见的应用是用于判断一个变量是否是某个对象的实例。

> null instanceof Object // false
> NaN instanceof Number // false

### typeof

```
typeof true // boolean
```
操作符返回一个 **全小写** 字符串，表示未经计算的操作数的类型。

|类型| 结果|
|:-|:-:|
|undefined|`"undefined"`|
|**Null**|`"object"`|
|Boolean|`"boolean"`|
|Number|`"number"`|
|String|`"string"`|
|Symbol(ECMAScript6新增)|`"symbol"`|
|function(){}|`"function"`|
|任何其他对象(Array,Set等)|`"object"`|

> #### 一些可能出错的情况
> ```
> typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写
> typeof (typeof 1) === 'string'; // typeof总是返回一个字符串
>
> // Symbols
> typeof Symbol() === 'symbol';
> typeof Symbol('foo') === 'symbol';
> typeof Symbol.iterator === 'symbol';
>
> // 下面的容易令人迷惑，不要使用！
> typeof new Boolean(true) === 'object';
> typeof new Number(1) === 'object';
> typeof new String("abc") === 'object';
>
>```

