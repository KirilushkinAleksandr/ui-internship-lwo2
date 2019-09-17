function minNumberToPrime(arr) {
  const sum = arr.reduce((sum, item) => sum + item, 0);
  let isPrime = true;
  for (let i = sum; i < Math.pow(sum, 2); i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      return i - sum;
    }
    isPrime = true;
  }
}

export {minNumberToPrime};
