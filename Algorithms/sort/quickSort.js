function quickSort (arr) {
  if(arr.length <= 1) return arr
  // var m = arr.splice(Math.floor(arr.length / 2), 1)[0], // 用splice就是麻瓜
  var m = arr[0],
      l = [],
      r = [];
  arr.shift()
  for (var i = 0, length = arr.length - 1; i < length; i++) {
    if(arr[i] < m){
      l.push(arr[i])
    } else {
      r.push(arr[i])
    }
  }
  return quickSort(l).concat(m, quickSort(r))
}


// 别人优化过的排序
function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) { //分区操作
  var pivot = left, //设定基准值（pivot）
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}




var arr = [];
/*一万条随机数*/
for (var n = 0; n < 10000; n++) {
  arr.push(Math.round(Math.random() * 10));
}

var text = function (fn, param) {
  var start, end;
  // 记录执行的起始时间
  start = new Date().getTime();
  // 执行待测试的方法
  arr.quickSort() 
  // arr.sort((a, b) => a -b); // 耗时是阮一峰快排的二十分之一, 多捞啊
  // 记录执行的结束时间
  end = new Date().getTime();
  // 输出待测试方法所运行的结果和耗时
  console.log("排序完成，耗时" + (end - start) + "毫秒");
}

text();