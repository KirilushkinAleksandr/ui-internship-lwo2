function pairwise(inputArr, arg) {
  const sumsIndexes = [];
  const arr = inputArr.slice();
  for (let i = 0; i < arr.length; i++) {
    const tempIndex = arr.indexOf(arg - arr[i], i + 1);
    if (tempIndex > 0) {
      sumsIndexes.push(i + tempIndex);
      arr.splice(tempIndex, 1, NaN);
    }
  }
  return sumsIndexes.reduce((sum, item) => sum + item, 0);
}

export {pairwise};
