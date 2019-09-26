/**
 * @example
 * // return 9
 * greatestCommonDivisor(36, 45)
 * function greatestCommonDivisor accepts two numbers and
 * returns their greatest common divisor using
 * recursive binary gcd algorithm
 * @param {Number} input1, first number passed
 * @param {Number} input2, second number passed
 * @return {Number} greatest common divisor
 * @return {Function} recursive call of greatestCommonDivisor()
 */
function greatestCommonDivisor(input1, input2) {
  const m = input1;
  const n = input2;
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
      return 2 * greatestCommonDivisor(m / 2, n / 2);
    } else {
      return greatestCommonDivisor(m / 2, n);
    }
  }

  if (n % 2 === 0 && m % 2 !== 0) {
    return greatestCommonDivisor(m, n / 2);
  }

  if (n > m) {
    return greatestCommonDivisor((n - m) / 2, m);
  } else {
    return greatestCommonDivisor((m - n) / 2, n);
  }
}

export {greatestCommonDivisor};
