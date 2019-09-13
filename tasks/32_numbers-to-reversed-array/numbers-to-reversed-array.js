function numberToReversedArray(num) {
  const res = num.toString(10).split('').reverse();
  return res.map((item) => Number(item));
}

export {numberToReversedArray};
