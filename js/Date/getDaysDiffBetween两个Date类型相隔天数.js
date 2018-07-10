const getDaysDiffBetweenDates = (start, fin) =>
  (start, fin) / (1000 * 3600 * 24)

getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9