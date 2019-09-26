const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;
/**
 * @example
 * // return [{name: "sputnik", orbitalPeriod: 86400}]
 * orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
 * function orbitalPeriod returns a new array that transforms
 * the element's average altitude into their orbital periods
 * @param {Array} inputArr, passed array of objects
 * @return {Array} new array with orbital period instead of average altitude
 */
function orbitalPeriod(inputArr) {
  const objectsArr = inputArr.slice();
  objectsArr.forEach((item) => {
    const distance = item.avgAlt + EARTH_RADIUS;
    item.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(
        Math.pow(distance, 3) / GM));
    delete item.avgAlt;
  });
  return objectsArr;
}

export {orbitalPeriod};
