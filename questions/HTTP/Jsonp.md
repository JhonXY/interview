## 原理

利用了script标签的请求可以跨域的特点进行跨域请求，但只限于get方法

## 使用方式

#### 前端

```
<script>
  // 按照约定的接口格式名来定义函数名
  function suggest360(res) {
    console.log(JSON.stringify(res));
  }
  // 一般接口都会将callback参数读取值来作为返回的回调处理函数名
  function a(res) {
    console.log(JSON.stringify(res));
  }
  let script = document.createElement('script');

  // src设置接口以及传入参数
  script.src = 'https://sug.so.360.cn/suggest?callback=a&word=阿里巴巴'; // 自行传入回调名
  script.src = 'https://sug.so.360.cn/suggest?word=阿里巴巴'; // 使用默认的回调名
  document.body.appendChild(script);
</script>
```

#### 后端

因为是使用js脚本做的跨域请求，所以获取的也是一段js代码，
其实就是将json，当然也可以是其他任何数据，作为数据传入自行定义的回调函数或默认的回调函数的执行，
为避免报错，该回调函数需要先行在前端定义。
```
// 按照传入的callback值返回一个对应的函数调用
// Response的返回值
a({q:"阿里巴巴",p:true,s:["","",""," 65533"]});

// 不传callback参数则会默认返回回调函数名
suggest360({---})
```