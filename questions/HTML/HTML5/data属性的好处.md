## data-xx

自定义数据属性，在HTML5中使用data-xx来设置我们需要的自定义属性来进行一些数据的存放。

## 使用方法

```
<div id = "user" data-uid = "12345" data-uname = "愚人码头" > </div>
```

1. 使用兼容性的attribute方法

```
// 使用getAttribute获取 data- 属性
var user = document . getElementById ( 'user' ) ;
var userName = plant . getAttribute ( 'data-uname' ) ; // userName = '愚人码头'
var userId = plant . getAttribute ( 'data-uid' ) ; // userId = '12345'
 
// 使用setAttribute设置 data- 属性
user . setAttribute ( 'data-site' , 'http://www.css88.com' ) ;
```

这种“原始”的自定义属性和上面 data-* 自定义属性没什么区别，只是属性名不一样。

2. 使用dataset处理

`dataset` 属性是 **HTML5 JavaScript API** 的一部分，用来返回一个所有选择元素 data- 属性的 **DOMStringMap** 对象。

使用这种方法时，不是使用完整的属性名，如 data-uid 来存取数据，应该去掉data- 前缀。

还有一点特别注意的是： data- 属性名如果包含了连字符，例如：data-date-of-birth ，连字符将被去掉，并转换为 _驼峰式_ 的命名，前面的属性名转换后应该是： dateOfBirth 。

```
var el = document.querySelector('#user');

// 创建data属性
el.dataset.dateOfBirth = '19960710';

// 删除data属性
delete el.dataset.dataOfBirth;

el.dataset.dataOfBirth = null;

```

dataset 属性只有在Chrome 8+ Firefox(Gecko) 6.0+ Internet Explorer 11+ Opera 11.10+ Safari 6+浏览器中实现，所以在此期间最好用的getAttribute和setAttribute来操作。

## 属性选择器

```
// 选择所有包含 'data-flowering' 属性的元素
document . querySelectorAll ( '[data-flowering]' );
 
// 选择所有包含 'data-text-colour' 属性值为red的元素
document . querySelectorAll ( '[data-text-colour="red"]' );
```

同样在css选择器中也生效

```
<style type ="text/css">
    .user {
         width : 256px ;
         height : 200px ;
     }
 
     .user[data-name='feiwen'] {
         color : brown
     }
 
     .user[data-name='css'] {
         color : red
     }
</style>
<div class = "user" data-id = "123" data-name = "feiwen" > 1 </div>
<div class = "user" data-id = "124" data-name = "css" > 码头 </div>
```



