const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;

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
