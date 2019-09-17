function sortByBits(arr) {
  return arr.sort(function(prev, next) {
    const prevOnBits = countOnBits(prev);
    const nextOnBits = countOnBits(next);
    return prevOnBits === nextOnBits ? prev - next : prevOnBits - nextOnBits;
  });
}

function countOnBits(num) {
  return num.toString(2).replace(/0/g, '').length;
}

export {sortByBits};
