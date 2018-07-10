```
border: 0; // 浏览器对border-width、border-color进行渲染，占用内存。

border: none // 浏览器不进行渲染，不占用内存。
```

### Chrome：

`border:none;` >> `border:initial none initial;`
`border:0;` >> `border:0 initial  initial;`

### Firefox、360：

`border:none;` >> `border:medium none;`
`border:0;` >> `border:0 none;`

> **W3C提示：请始终把border-style属性声明到border-color属性之前，元素必须在改变颜色之前获得边框。**