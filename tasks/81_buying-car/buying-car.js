function nbMonths(
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth
) {
  let sum = 0;
  let decreasePercent = percentLossByMonth;
  if (startPriceOld > startPriceNew) {
    return [0, startPriceOld - startPriceNew];
  }
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
      decreasePercent += 0.5;
    }
    startPriceOld = Math.round(startPriceOld * (1 - (decreasePercent / 100)));
    startPriceNew = Math.round(startPriceNew * (1 - (decreasePercent / 100)));
    sum += savingsPerMonth;
    if (sum + startPriceOld >= startPriceNew) {
      return [i, sum + startPriceOld - startPriceNew];
    }
  }
}


export {nbMonths};
