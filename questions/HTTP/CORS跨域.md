## 概述

当一个资源从与该资源本身所在的服务器不同的域或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。

出于安全原因，浏览器限制从脚本内发起的跨源HTTP请求。 例如，XMLHttpRequest和Fetch API遵循同源策略。 这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非使用CORS头文件。

跨域资源共享（Cross-origin resource sharing）机制允许 Web 应用服务器进行跨域访问控制，从而使跨域数据传输得以安全进行。浏览器支持在 API 容器中（例如 XMLHttpRequest 或 Fetch ）使用 CORS，以降低跨域 HTTP 请求所带来的风险。

CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。


## 实现

整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，

代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，会多出一次附加的请求，该请求为option类型且Headers添加Origin信息来指定请求的源。

但用户不会有感觉。因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。

服务端的工作是检查头信息以确定是否接受该请求。如果一个请求被接受，它必须发回一个包含Access-Control-Allow-Origin，

hander() 设置，“*”号表示允许任何域向我们的服务端提交请求，如果后端要提供公开服务，可以这样配置：

``` 
header("Access-Control-Allow-Origin:*");
```

也可以设置指定的域名，如域名 http://www.test2.com ，那么就允许来自这个域名的请求：

```
header("Access-Control-Allow-Origin:http://www.test2.com");
```

> #### 对比jsonp
> CORS与JSONP的使用目的相同，但是比JSONP更强大。
>
>JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的
>
>网站请求数据。 post比get传输的数据量要大，如果数据量比较大时CORS是不二的选择。
>
>cors在移动端支持的很好！