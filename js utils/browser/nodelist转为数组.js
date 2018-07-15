// 通用兼容
function convertListToArray(nodes) {
  var array = null;
  try {
    array = Array.prototype.slice.call(nodes, 0);
  } catch (ex) {
    array = new Array();
    for (var i = 0, len = nodes.length; i < len; i++) {
      array.push(nodes[i]);
    }
  }

  return array;
}