function sumFibs(limit) {
  let sum = 2;
  let prev2 = 1;
  let prev1 = 1;
  for (let i = 3; i <= limit; i++) {
    let current = prev1 + prev2;
    if (current > limit) {
      break;
    }
    if (current % 2 === 1) {
      sum += current;
    }
    prev2 = prev1;
    prev1 = current;
  }
  return sum;
}

export {sumFibs};
