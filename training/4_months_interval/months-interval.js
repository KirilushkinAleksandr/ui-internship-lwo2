/**
 * @example
 * // return ['January']
 * monthsInterval(new Date(2017, 0, 1), new Date(2017, 0, 1))
 * function monthsInterval gets 2 dates, returns the names
 * of the months that are present between them (inclusive)
 * @param {Date} inputDate1, first date
 * @param {Date} inputDate2, second date
 * @return {Array} array of months between passed dates
 */
function monthsInterval(inputDate1, inputDate2) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  if (Math.abs(inputDate1.getFullYear() - inputDate2.getFullYear()) > 1) {
    return months;
  }
  const res = [];
  let min = Math.min(inputDate1.getMonth(), inputDate2.getMonth());
  let max = Math.max(inputDate1.getMonth(), inputDate2.getMonth());
  if (inputDate1.getFullYear() === inputDate2.getFullYear()) {
    while (min <= max) {
      res.push(months[min]);
      min++;
    }
  } else {
    if (inputDate1.getMonth() === inputDate2.getMonth()) {
      return months;
    }
    let counter = 0;
    while (counter <= min) {
      res.push(months[counter]);
      counter++;
    }
    while (max <= 11) {
      res.push(months[max]);
      max++;
    }
    return res;
  }
  return res;
}


export {monthsInterval};
