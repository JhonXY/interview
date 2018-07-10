const flatten = arr => arr.reduce((pre, cur) =>
  pre.concat(cur), []
)

// concat会将一维数组拆分push到调用方法的数组，
// 所以只是浅拼合，调用concat即可