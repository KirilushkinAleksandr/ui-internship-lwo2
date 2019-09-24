function squares(input) {
  let count = 0;
  for (let i = 1; i <= input; i++) {
    if (i % 4 === 0 || i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

export {squares};
