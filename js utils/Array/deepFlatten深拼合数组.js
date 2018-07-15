const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v))

// 利用递归，递归地将嵌套的数组拆分，直到能成为单独的一个值并返回与空数组concat
