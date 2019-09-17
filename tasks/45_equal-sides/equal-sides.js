function findEqualIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((sum, item) => sum + item);
  return arr.reduce((sum, item, index) => {
    rightSum -= item;
    if (leftSum === rightSum && sum === -1) {
      return index;
    }
    leftSum += item;
    return sum;
  }, -1);
}

export {findEqualIndex};
