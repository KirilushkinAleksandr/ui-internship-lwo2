function getAverage(arr) {
  const res = arr.reduce((sum, item) => sum + item, 0)/arr.length;
  return Math.round(res);
}

export {getAverage};
