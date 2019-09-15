function sortByBits(arr) {
  return arr.sort(function (prev, next) {
    return countOnBits(prev) === countOnBits(next) ? prev - next : countOnBits(prev) - countOnBits(next);
  });
}

function countOnBits(num) {
  const arr = num.toString(2).split('');
  return arr.reduce(
    (count, item) => item === '1' ? ++count : count,
    0
  );
}

export {sortByBits};
