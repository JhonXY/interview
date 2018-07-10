function bubbleSort (arr) {
  var len = arr.length
  for (var i = 0, l = len - 1; i < l; i++) {
    for (var j = 0, h = len - 1 - i; j < h; j++) {
      if (arr[j] > arr[j+1]) {
        var tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
  return arr
}