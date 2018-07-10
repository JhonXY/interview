// 直接用Boolean的类型方法来作为filter的回调
// 相当于直接转化为布尔值，
// filter的回调中，返回true则将该数组项返回，false则不返回
// 最终返回一个新数组
const compact = arr => arr.filter(Boolean)
// 相当于
const compact = arr => arr.filte((ele, index, arr) => !!ele)

// falsy的值有以下
// false, null, undefined, 0, NaN, '', "", document.all
// 这些值转化为Boolean类型为false
