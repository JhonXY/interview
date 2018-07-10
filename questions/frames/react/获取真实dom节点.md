## refs

两种使用方式

1. 回调注册

```
testRef = ref => { // 使用回调的方式可以将该节点绑定在一个组件属性上方便直接调用
  this.ref1 = ref
}

<div ref={this.testRef}> // jsx中注册

// 因为是真实节点，需要在didmount之后才可以使用
componentDidMount(){
  console.log(this.ref1);  // 可取真实dom
  console.log(this.refs.ref1);  // 无法取到
}

// 这种动态绑定的写法依旧是不可取的
// 会每次render重复绑定，影响性能
<div ref={ref => { this.ref1 = ref }}>
```

2. 字符串属性

```
componentDidMount(){
  console.log(this.refs.ref1);
}


<div ref="ref1">

// 也可以使用ReactDom来获取该节点
componentDidMount(){
  // console.log(this.ref1);
  console.log(this.refs.ref1); // 可取
  let test = ReactDom.findDOMNode(this.ref['ref1']) // 可取
  console.log(test);
}
```

> 回调注册的方法不会将节点绑定到this.refs上，字符串属性的方式则会。