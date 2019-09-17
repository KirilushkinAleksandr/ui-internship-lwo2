function firstNSmallest(arr, num) {
  let res = arr.slice();
  while (res.length > num) {
    res.splice(res.lastIndexOf(Math.max(...res)), 1);
  }
  return res;
}

export {firstNSmallest};
