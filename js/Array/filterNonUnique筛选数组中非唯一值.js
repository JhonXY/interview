const filterNonUnique = arr => arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v))

// 该值在数组中indexOf和lastIndexOf相同说明该值只在数组中出现一次