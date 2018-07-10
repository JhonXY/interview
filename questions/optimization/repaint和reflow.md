### 对比
性能消耗reflow大于repaint。

repaint是某个DOM元素进行重绘；reflow是整个页面进行重排，也就是页面所有DOM元素渲染。

Repaint(重绘)就是在一个元素的外观被改变，但没有改变布局(宽高)的情况下发生，如改变visibility、outline、背景色等等。

Reflow(回流)就是DOM的变化影响到了元素的几何属性(宽和高)，浏览器会重新计算元素的几何属性，会使渲染树中受到影响的部分失效，浏览器会验证DOM树上的所有其它结点的visibility属性，这也是Reflow低效的原因。如：改变窗囗大小、改变文字大小、内容的改变、浏览器窗口变化，style属性的改变等等。

回流的花销跟render tree有多少节点需要重新构建有关系，假设你直接操作body，比如在body最前面插入1个元素，会导致整个render tree回流，这样代价当然会比较高，但如果是指body后面插入1个元素，则不会影响前面元素的回流。

### 常见触发场景

1. repaint:

- color
- test-align(text-align = center)
- a:hover
- :hover导致页面不会回流的style变动
- 很多...

2. reflow:

- width/height/border/marigin/padding
- 动画类 display = none;
- DOM操作（对元素的增删改、顺序变化等）
- font类style的修改，内容变化，包括表单区域内的文本变化，比如文本改变或者图片大小改变而引起的计算值宽度和高度改变
- background 部分厂家是repaint（所以只修改颜色就只修改background-color）
- 修改元素class
- scroll 不可避免
- resize 调整窗口大小
- 读取元素属性，读取元素的某些style属性（offsetLeft、offsetTop、offsetHeight、offsetWidth、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、width,height、getComputedStyle()、currentStyle(in IE))（原因下面解释）

### 浏览器优化渲染

#### 浏览器自主优化

浏览器会维护一个重绘回流队列，等队列中的操作达到一定的数量或到了一定时间间隔，
浏览器会flush队列，进行一个批处理，将多次的回流重绘变成一次回流重绘。

但一旦js中向浏览器请求了一些style信息，浏览器会为了给出精确值，强制flush队列，
所以需要考虑好提取信息的时机。

#### 可操作优化

1. 样式表放在head标签中，脚本放在body结束前。 
2. 简化并优化css选择器。（选择器是从右到左匹配） 
3. DOM节点保存在一个变量中，避免重复获取。 
4. 修改元素样式时，更改其class属性更好，也就是将所有的修改用一个class呈现（反正要重绘，干脆一次性）。如果动态改变样式，则使用cssText（考虑没有优化的浏览器）
5. 让要操作的元素进行”离线处理”，处理完后一起更新

例如要异步获取表格数据，渲染到页面。可以先取得数据后在内存中构建整个表格的html片段，再一次性添加到文档中去，而不是循环添加每一行

- 使用DocumentFragment进行缓存操作,引发一次回流和重绘(实测短时间内的几种重绘甚至1万次，耗时不如直接操作dom不知道什么鬼，浏览器优化的锅？)。 __一次回流和重绘__
- 将要修改的块先display: none,display属性为none的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。修改完后在恢复（感觉跟上一个差不多）。 __两次回流和重绘__
- 使用 [cloneNode](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode)（true or false）和 [replaceChild](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild) 做操作。 __一次回流和重绘__ 
6. 将需要多次回流的元素position设为absolut或fixed，脱标后就不会影响到标准文档流了。
7. 在需要经常取那些引起浏览器重排的属性值时，缓存该值到变量。用一个比较形象的例子就是：
```
// 错误
for(...) {
el.style.left = el.offsetLeft + 5 + "px";
el.style.top = el.offsetTop + 5 + "px";
}
 
// 正确
var left = el.offsetLeft, top = el.offsetTop,
s = el.style; 
for (...) { 
left += 10; 
top += 10; 
s.left = left + "px"; 
s.top = top + "px"; 
}
```
这里的操作用display: none的方法后能显著降低第一种错误情况的消耗时间，说明这种优化方式还是可行的，尤其对于复杂的dom操作。
而缓存变量的方式则确实降低了十分多的时间消耗。

> 这里再记录一下别人的测试工具：**dynaTrace**(测试ie), **Speed Tracer**(测试Chrome)。