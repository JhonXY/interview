// 最简单
var XHR = new XMLHttpRequest()
XHR.onreadystatechange = stateChange; //指定响应函数为state_Change
XHR.open("GET", "/example/xdom/note.xml", true); //指定请求，这里要访问在/example/xdom路径下的note.xml文件，true代表的使用的是异步请求
XHR.send(); //发送请求

function stateChange() {
  // or XHR.readyState === 4
  if (XHR.readyState === XMLHttpRequest.DONE) {
    if (XHR.status === 200) {
      alert(XHR.responseText)
    } else {
      alert('wrong')
    }
  }
}

/** 
 * 原生ajax大体步骤
1. new XMLHttpRequest()
2. 指定onreadystatechange函数
3. 调用open方法，指定“GET”和“URL”
4. 调用send发送ajax请求
5. 创建响应函数，判读是否DONE
*/

/*
readyState的状态
0 XMLHttpRequest.UNSENT  代表初始化，还未调用open
1 XMLHttpRequest.OPENED  代表正在加载，open已调用，还未send
2 XMLHttpRequest.HEADERS_RECEIVED  代表已加载完毕，send已调用，请求已开始
3 XMLHttpRequest.LOADING  代表交互中，服务器正在发送响应
4 XMLHttpRequest.DONE  代表完成，响应已完成
 */


// promise封装
function getJSON(url) {
  return new Promise(function (resolve, reject) {
    var XHR = new XMLHttpRequest();
    XHR.open('GET', url, true);
    XHR.send();

    XHR.onreadystatechange = function () {
      if (XHR.readyState == 4) {
        if (XHR.status == 200) {
          try {
            var response = JSON.parse(XHR.responseText);
            resolve(response);
          } catch (e) {
            reject(e);
          }
        } else {
          reject(new Error(XHR.statusText));
        }
      }
    }
  })
}

getJSON(url).then(res => console.log(res));