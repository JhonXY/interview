var test = {
  a: function(){
    console.log(a);
  },
  b: undefined,
  c: [1,2,4,5]
}

function clone(obj) {
  let _obj = JSON.parse(JSON.stringify(obj))
  return _obj
}

var test1 = clone(test)

test1 = {
  c: [1,2,4,5]
}

// 可以发现该方法虽然实现了深拷贝
// 但函数，undefined的情况会被过滤掉
// 所以最好的方案是：
// 且数组，对象都可进行深拷贝
function clone(obj) {
  if (!obj && typeof obj !== 'object') {
    return;
  }
  var newObj = obj.constructor === Object ? {} : [];
  for (var key in obj) {
    newObj[key] = (obj[key] && typeof obj[key] === 'object') ? clone(obj[key]) : obj[key];
  }
  return newObj;
}

// JSON.parse() 是将字符串转黄成json对象
// JSON.stringfiy() 相反是将json对象转换成字符串
// json对象可以等同于js对象

// *** JSON.stringfiy将不会转换undefined和function


// 这里提以下浅拷贝
// 只有一层的对象可以直接这样使用
function clone1 (obj){
  return Object.assign({}, obj)
}