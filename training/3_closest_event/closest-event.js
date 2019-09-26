/**
 * @example
 * // return 'Challenger Spacecraft Explodes'
 * closestEvent([
 * { date: '2005-08-23', name: 'Hurricane Katrina' },
 * { date: '1989-11-09', name: 'Fall of the Berlin Wall' },
 * { date: '1986-01-28', name: 'Challenger Spacecraft Explodes' },
 * ], new Date(1970, 0, 1))
 * function closestEvent takes array of objects containing some events
 * and return the name of the event that is closest to that date
 * @param {Array} events, array of dates
 * @param {Date} inputDate, date to search for
 * @return {String} the name of the event that is closest to passed date
 */
function closestEvent(events, inputDate) {
  const date = inputDate.getTime();
  let closestDate = new Date(events[0].date);
  for (let i = 0; i < events.length; i++) {
    const current = new Date(events[i].date);
    if (Math.abs(current.getTime() - date) <
        Math.abs(closestDate.getTime() - date)) {
      closestDate = current;
    }
  }
  return events.find((event) => {
    return new Date(event.date).getTime() === closestDate.getTime();
  }).name;
}

export {closestEvent};
