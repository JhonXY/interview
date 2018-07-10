## falsy

- `""` 空字符串
- `0, -0, NaN` 非法的number
- `null, undefined`
- `false`

## truthy

- `"hello"` 不为空的字符串
- `1` 合法的number
- `[], [1,2]` 数组
- `{}, {a: 1}` 对象
- `function a(){}` 函数
- `true`

> 也就是所有的引用类型都为truetruthy

**一个非boolean值仅在实际上被强制转换为一个boolean时才遵循这个“truthy”/“falsy”强制转换。**

