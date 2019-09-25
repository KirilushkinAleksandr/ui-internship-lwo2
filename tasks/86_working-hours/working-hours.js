/**
 * @example
 * // return [
 * // 'MON - WED: 11:00 - 23:00',
 * //'THU - FRI: 12:00 - 23:00',
 * //'SAT: 10:00 - 23:00',
 * //'SUN: 11:00 - 23:00'
 * // ];
 * formatWorkingHours([
 * {
 *    "day": "sat",
 *     "from": "10:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "mon",
 *     "from": "11:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "tue",
 *     "from": "11:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "wed",
 *     "from": "11:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "thu",
 *     "from": "12:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "fri",
 *     "from": "12:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "sun",
 *     "from": "11:00",
 *     "to": "23:00"
 * }
 * ];)
 * function formatWorkingHours which formats a working hours schedule,
 * given as an array of objects, in a human-friendly way
 * @param {Array} inputArr, unsorted array of daily schedules
 * @return {Array} array of objects
 */
function formatWorkingHours(inputArr) {
  const daysArr = inputArr.slice();
  const daysOfWeek = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 7,
  };
  daysArr.sort(
      (a, b) => daysOfWeek[a.day] - daysOfWeek[b.day]
  );
  const res = [];
  let startIndex = 0;
  for (let i = 1; i < daysArr.length; i++) {
    if (i === daysArr.length - 1) {
      res.push(`${daysArr[i - 1].day.toUpperCase()}: ` +
      `${daysArr[i - 1].from} - ${daysArr[i - 1].to}`
      );
      res.push(`${daysArr[i].day.toUpperCase()}: ` +
      `${daysArr[i].from} - ${daysArr[i].to}`
      );
      break;
    }
    if (daysArr[i].from !== daysArr[i - 1].from ||
        daysArr[i].to !== daysArr[i - 1].to) {
      res.push(
          `${daysArr[startIndex].day.toUpperCase()}` +
          ` - ${daysArr[i - 1].day.toUpperCase()}: ` +
        `${daysArr[i - 1].from} - ${daysArr[i - 1].to}`);
      startIndex = i;
    }
  }
  return res;
}

export {formatWorkingHours};
