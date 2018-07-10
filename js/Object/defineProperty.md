# Object.defineProperty(obj, prop, descriptor)

如果obj对象中不存在，prop属性，defineProperty会根据descripter描述符创建该属性，如果该属性已存在，则根据描述符中的configurable来判断是否可修改该属性的配置。

三个参数
---
obj<br/>
　　要在该obj上定义属性的对象
<br/>
<br/>
prop<br/>
　　要定义或修改的属性的名称
<br/>
<br/>
descriptor<br/>
　　将被定义或修改的属性描述符

描述符要点
---
* 属性描述符有两种形式,**数据描述符**和**存取描述符**
* 数据描述符可有**value**和**writable**属性
* 存取描述符则由**getter-setter**函数对组成
* 描述符必须是两者中的一种
* 描述符不可两者并存


descriptor可有以下键值
---
1. configurable（共有）
<br/>

只有该属性为true时才可以修改该属性的**描述符**，
该属性也能从对应对象上被删除，
_默认值为false_

2. enumerable（共有）
<br/>

只有该属性为true时该属性才能够出现在对象枚举属性中，
_默认值为false_

3. value（数据描述符）
<br/>

该属性对应的值，可以是js中的任何有效值
_默认值为undefined_

4. writable（数据描述符）
<br/>

只有该属性为true时该属性的value才能被赋值运算符改变，
_默认值为false_

5. get（存取描述符）
<br/>

定义该属性的getter方法，
无getter则为undefined，
访问该属性时自动调用getter方法，
无参数，该方法的返回值被用作该属性的value（也就是存取型只能从getter中获取value）
_默认值为undefined_

6. set（共有）
<br/>

定义该属性的setter方法，
无setter则为undefined，
重新赋值该属性时自动调用setter方法，
该方法必须接受一个唯一参数，
_默认值为false_

> ### 注意点
> - 如果一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。
> 
> - get和set都能用delete方法删除。
> 
> - get和set中不可使用this访问该属性本身，会造成无限循环。
> 
> - 只有get无set表示该属性只可访问，不可重写。
> 
> - 同一属性不可用defineProperty重复定义或修改。
> <br/>
> <br/>




