function sumPrimes(input) {
  let isPrime = true;
  let res = 0;
  for (let i = 2; i <= input; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      res += i;
    }
    isPrime = true;
  }
  return res;
}

export {sumPrimes};

