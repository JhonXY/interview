使用全角空格填充空位<br/>
　　<- 全角的空格，shift + space切换全半角

使用转义符填充<br/>
&emsp;&emsp; <- em空格（一个等于一个中文宽度）

> HTML中的空格占位符有以下几种
> - \&#32; 普通的英文半角空格
> - \&#160; == \&nbsp; == \&#xA0; == no-break space （普通的英文半角空格但不换行）
> - \&#12288; == 中文全角空格 （一个中文宽度）
> - \&#8194; == \&ensp; == en空格 （半个中文宽度）
> - \&#8195; == \&emsp; == em空格 （一个中文宽度）
> - \&#8197; == 四分之一em空格 （四分之一中文宽度）
> <br/>
> <br/>
> 相比平时的空格（\&#32;），\&nbsp;拥有不间断（non-breaking）特性。即连续的&nbsp会在同一行内显示。即使有100个连续的&nbsp，浏览器也不会把它们拆成两行。
