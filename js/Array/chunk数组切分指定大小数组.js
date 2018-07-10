const chunk = (arr, size) =>
  // from中传入一个只指定了length的obj会生成一个
  // 该length大小的数组
  // from中传入的第二个函数参数
  // 会为生成的数组调用map并该函数作为参数
  Array.from({
      // ceil去掉小数位向上取整（全入）
      length: Math.ceil(arr.length / size)
    }, (v, i) =>
    // 截取a~b间的数组部分并拷贝到一个新数组返回该新数组
    v = arr.slice(i * size, i * size + size)
  );

