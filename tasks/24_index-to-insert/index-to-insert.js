function getIndexToInsert(arr, num) {
  arr.sort((a, b) => a-b );
  const res = arr.findIndex((item) => item >= num);
  return res === -1 ? arr.length : res;
}

export {getIndexToInsert};
