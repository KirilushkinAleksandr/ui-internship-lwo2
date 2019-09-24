function leastCommonMultiple(input1, input2) {
  return (input1 * input2) / gcd(input1, input2);
}

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

export {leastCommonMultiple};
