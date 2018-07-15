const dropElements = (arr, fuc) => {
  let tmparr = arr
  while(tmparr.length > 0 && !fuc(tmparr[0])) tmparr.shift()
  return tmparr
}