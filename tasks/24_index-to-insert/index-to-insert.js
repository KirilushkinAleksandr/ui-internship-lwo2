function getIndexToInsert(arr, num) {
  let res = arr.sort((a, b) => a - b );
  res = res.findIndex((item) => item >= num);
  return res === -1 ? arr.length : res;
}

export {getIndexToInsert};
