const arrayMax = arr => Math.max(...arr)
const arrayMin = arr => Math.min(...arr)

const all = arr => Math.max.apply(null, arr)
const all2 = arr => {
  var tmp = arr
  var max = tmp[0]
  for (var i = 1, length = tmp.length; i < length; i++) {
    max < tmp[i] && (max = tmp[i])
  }
  return max
}