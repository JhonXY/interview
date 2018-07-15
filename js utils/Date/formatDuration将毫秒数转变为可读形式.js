// 英文版
// Object.entries将对象转化为嵌套数组的结构
// {a: 1, b: 2}  =>  [[a, 1], [b, 2]]
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(val => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
    .join(', ');
};