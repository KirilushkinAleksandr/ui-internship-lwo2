/**
 * @example
 * // return 30030
 * numPrimorial(6)
 * function numPrimorial calculates the primorial of a number
 * @param {Number} input, passed number
 * @return {Number} primorial of the passed number
 */
function numPrimorial(input) {
  let isPrime = true;
  let res = 1;
  let count = input;
  for (let i = 2; i < Math.pow(input, input); i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      res *= i;
      count--;
    }
    isPrime = true;
    if (count === 0) {
      break;
    }
  }
  return res;
}

export {numPrimorial};
