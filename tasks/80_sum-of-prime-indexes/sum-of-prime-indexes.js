function sumPrimeIndexedElements(inputArr) {
  const res = inputArr.slice();
  return res.reduce(
      (primesSum, item, index) => {
        if (isPrime(index)) {
          return primesSum + item;
        }
        return primesSum;
      },
      0
  );
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export {sumPrimeIndexedElements};
