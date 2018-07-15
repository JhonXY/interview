const intersection = (a, b) => a.filter(v => (new Set(b).has(v)))

// 利用新建一个Set将b数组不重复的值拿出
// 再用a调用filter返回一个a中的元素存在于Set中的新数组