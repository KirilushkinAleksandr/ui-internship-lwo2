/**
 * @example
 * // return 7
 * sumPrimeIndexedElements([1, 2, 3, 4])
 * function sumPrimeIndexedElements returns sum of elements
 * occupying prime-numbered indexes
 * @param {Array} inputArr, passed array of integers
 * @return {Number} sum of elements with prime - numbered indexes
 */
function sumPrimeIndexedElements(inputArr) {
  const res = inputArr.slice();
  return res.reduce(
      (primesSum, item, index) => {
        if (isPrime(index)) {
          return primesSum + item;
        }
        return primesSum;
      }, 0);
}
/**
 * @example
 * // return a boolean
 * isPrime(x)
 * function isPrime checks passed number on if it's prime or not
 * @param {Number} num, passed number
 * @return {Boolean} true if number is prime, false if it's not
 */
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
