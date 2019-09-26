/**
 * @example
 * // return [6, 766]
 * nbMonths(2000, 8000, 1000, 1.5)
 * function nbMonths calculates how many months will it take
 * to save up enough money to buy the car and how much money will left over
 * @param {Number} startPriceOld, starting price of an old car
 * @param {Number} startPriceNew, starting price of a new car
 * @param {Number} savingsPerMonth, monthly savings
 * @param {Number} percentLossByMonth, the percent of monthly loss
 * @return {Array} array of two numbers - number of months
 * and how much money will left over
 */
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
