function numberToReversedArray(num) {
  const res = num.toString(10).split('').reverse();
  return res.map(Number);
}

export {numberToReversedArray};
