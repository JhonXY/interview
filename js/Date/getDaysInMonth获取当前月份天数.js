const getDaysInMonth = () => {
  switch (Date.getMonth()) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 1:
      let y = Date.getFullYear();
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    default:
      return 30;
  }
}

const getDays = () => {
  let date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}
