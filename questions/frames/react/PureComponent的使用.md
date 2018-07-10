## PureComponent 对比 Component

当props或者state改变的时候，会执行shouldComponentUpdate方法来判断是否需要重新render组建，我们平时在做页面的性能优化的时候，往往也是通过这一步来判断的。Component默认的shouldComponentUpdate返回的是true。

也就是一旦改变则触发render这是十分消耗性能的。

在PureComponent中shouldComponentUpdate被重写，state跟props的现有值跟过去值只会做潜比较，即比较两者的内存地址是否相同，而对于其值是否发生变化，则不会理会。也就是说如果props是一个Object或Array改变其内部不会触发render。

可以通过重写shouldComponentUpdate来实现类似PureComponent的效果:

```
shouldComponentUpdate(nextProps, nextState) { 
  return nextProps.user.id === props.user.id; 
}
```

且大多数情况下这样效果更好，应为PureComponent的性质有些极端，实用范围不广。

如果要操作使用了引用类型的PureComponent，并使其按照期望去render需要始终返回一个新的引用类型。

```
handleClick() {
  let {items} = this.state
  items.push('new-item')
  this.setState({ items })
}

render() {
  return (
    <div>
      // 此处点击修改的state中的items属性不会触发ItemList的render
      <button onClick={this.handleClick} />
      <ItemList items={this.state.items} />
    </div>
  )
}


// 改写handleClick
// 这样才可触发render
handleClick() {
  this.setState(prevState => ({
    items: prevState.items.concat(1)
  }), () => console.log(this.state));
}

// 或者更加简单粗暴
handleClick() {
  this.setState({items: [1,2,4]})
}

```


#### PureComponent的使用过程中需要有些注意的地方：

1. `<child prop={() => dosomething('lalala')}> </child>`

这样的props绑定写法应该禁止使用，这样的写法会在父组件render时使得子组件被强制rander，因为每次传入prop中的都是一个新函数，无论何时，为子组件绑定方法时都应该采用这样的格式`<child prop={this.dosomething}> </child>`。

2. `<Entity values={this.props.values || []}/>`

依旧是每次父组件的render都会创建一个新数组的缘故。这里的 `||` 效果可以使用DefaultProps代替，设置传输变量的初始空状态。

3. 在纯组件有子组件的时候，所有基于 `this.context` 改变的子组件，在this.context改变时， 将不会重新渲染，除非在父组件(Parent ParentComponent)中声明 `contextTypes`。

#### 总结

PureComponent非常适合于不变的组件，尤其是和数据、业务无关的纯展示组件，因为它的节省了大量比较的工作。但是对于大部分的业务来说，界面很少会有不变的组件，所以使用的场景会比较少。