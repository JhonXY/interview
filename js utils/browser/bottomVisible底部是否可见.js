const bottomVisible = () => 
  document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight

// document.documentElement.clientHeight 可见区域高度（不包括滚动条）

// window.scrollY 窗口y轴已经滚动的长度

// document.documentElement.scrollHeight 可视窗口可滚动的最大长度


