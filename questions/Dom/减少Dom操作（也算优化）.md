添加十个li

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <ul id="ul-test">
            
        </ul>
    </body>
    <script type="text/javascript">
        var oUl=document.getElementById("ul-test");
        for(var i=0;i<10;i++){
            var oLi=document.createElement('li');
            oLi.innerHTML=i;
            oUl.appendChild(oLi);
        }       
    </script>
</html>
```
减少了操作的次数也就减少了reflow的次数。

#### innerHTML

这种是最实际且有效果的。

```
var ul = document.getElementById('ul-test')
var inner = ''
for (var i = 0; i < 10; i++){
  inner += `<li>${i}</li>`
}
ul.innerHTML = inner
```

#### 使用文档碎片- **createDocumentFragment**

这样的使用方法不仅繁琐，有时候性能不一定好

```
var oUl=document.getElementById("ul-test"),_frag = document.createDocumentFragment();
for(var i=0;i<10;i++){
    var oLi=document.createElement('li');
    oLi.innerHTML=i;
    // 把元素添加进文档碎片，
    // 因为不是已经存在的元素，所以不影响dom性能
    _frag.appendChild(oLi);
}
//把文档碎片添加进元素
oUl.appendChild(_frag);
```