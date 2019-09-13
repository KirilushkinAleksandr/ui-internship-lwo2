function arrayLeaders(arr) {
  arr = arr.reverse();
  const leaders = [];
  arr.reduce(function(sum, item) {
    if (item > sum) {
      leaders.push(item);
    }
    return sum + item;
  }, 0);
  return leaders.reverse();
}

export {arrayLeaders};
