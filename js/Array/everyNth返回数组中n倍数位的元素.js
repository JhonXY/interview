const everNth = (arr, nth) => arr.filter((e, i) => i % nth === 0)

// % 是左除右返回其余数，余数为0则是整除