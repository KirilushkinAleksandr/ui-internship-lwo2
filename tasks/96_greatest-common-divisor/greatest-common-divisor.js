/**
 * @example
 * // return 9
 * greatestCommonDivisor(36, 45)
 * function greatestCommonDivisor accepts two numbers and
 * returns their greatest common divisor
 * @param {Number} input1, first number passed
 * @param {Number} input2, second number passed
 * @return {Number} greatest common divisor
 */
function greatestCommonDivisor(input1, input2) {
  return gcd(input1, input2);
}
/**
 * @example
 * // return 9
 * gcd(36, 45)
 * function gcd is an implementation of recursive binary gcd algorithm
 * to find the greatest common divisor of two nonnegative integers
 * @param {Number} m, some passed integer
 * @param {Number} n, some passed integer
 * @return {Number} greatest common divisor
 * @return {Function} recursive call of gcd()
 */
function gcd(m, n) {
  if (m === 0 || n === 0) {
    return Math.sqrt(Math.pow(m - n, 2));
  }

  if (m === n) {
    return m;
  }

  if (m === 1 || n === 1) {
    return 1;
  }

  if (m % 2 === 0) {
    if (n % 2 === 0) {
      return 2 * gcd(m / 2, n / 2);
    } else return gcd(m / 2, n);
  }

  if (n % 2 === 0) {
    if (m % 2 !== 0) {
      return gcd(m, n / 2);
    }
  }

  if (n > m) {
    return gcd((n - m) / 2, m);
  } else return gcd((m - n) / 2, n);
}

export {greatestCommonDivisor};
