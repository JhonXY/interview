// ***该函数会改变参数数组
// 利用arr.filter获取结果数组，
// 在用reduce收集被剔除的元素
const remove = (arr, func) =>
  Array.isArray(arr)
    // 返回filter为true的数组
    ? arr.filter(func).reduce((pre, cur) => {
      // 删除参数数组中filter为true的元素
      arr.splice(arr.indexOf(cur), 1)
      // 最后原样返回该filter的结果数组
      return pre.concat(cur)
    }, [])
    : []

let test = [1,2,4,5,6,7,8]
remove(test, (v)=> v > 5) // [6, 7, 8]
// test = [1,2,4,5]


// splice会改变原数组，slice不会