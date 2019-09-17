function arrayLeaders(input) {
  const arr = input.slice().reverse();
  const leaders = [];
  let sum = 0;
  arr.forEach((item) => {
    if (item > sum) {
      leaders.push(item);
    }
    sum += item;
  });
  return leaders.reverse();
}

export {arrayLeaders};
