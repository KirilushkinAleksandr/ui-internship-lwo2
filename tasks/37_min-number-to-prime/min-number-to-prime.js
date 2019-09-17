function minNumberToPrime(arr) {
  const res = arr.reduce(
      (sum, item) => sum + item, 0);
  return primesToNum(res).pop() - res;
}

function primesToNum(num) {
  const primes = [];
  let isPrime;
  for (let i = 2; i < Math.pow(num, 2); i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (!isPrime) {
      isPrime = true;
      continue;
    }
    primes.push(i);
    if (i >= num) {
      break;
    }
  }
  return primes;
}

export {minNumberToPrime};
