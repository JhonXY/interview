## 基本原理

BFC: 块级格式上下文

**BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。**

#### W3C原文

1. 内部的Box会在垂直方向，一个接一个地放置。

2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠

3. 每个元素的左外边缘（margin-left)， 与包含块的左边（contain box left）相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的BFC。

4. BFC的区域不会与float box重叠。

5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

6. 计算BFC的高度时，浮动元素也参与计算

> _英文原文_
> Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.
>
>In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.
>
>In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). This is true even in the presence of floats (although a box's line boxes may shrink due to the floats), unless the box establishes a new block formatting context (in which case the box itself may become narrower due to the floats).

#### 形成条件

1. 根元素或其它包含它的元素

2. 浮动 (元素的 float 不是 none)

3. 绝对定位的元素 (元素具有 position 为 absolute 或 fixed)

4. 非块级元素具有 display: inline-block，table-cell, table-caption, flex, inline-flex

5. 块级元素具有overflow ，且值不是 visible


[详细](https://hackathonchina.org/a/1190000009545742)
[分析](https://segmentfault.com/a/1190000010184203)