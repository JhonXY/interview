// ''.padStart(4, '0') 用0从开始位置补充字符串，直到该字符串length达到4
const tomorrow = (long = false) => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  const ret = `${t.getFullYear()}-
  ${String(t.getMonth() + 1).padStart(2, '0')}-
  ${String(t.getDate()).padStart(2, '0')}`;
  
  return !long ? ret : `${ret}T00:00:00`;
};