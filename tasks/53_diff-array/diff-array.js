function diffArray(arr1, arr2) {
  const res = [];
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      res.push(item);
    }
  });
  arr2.forEach((item) => {
    if (!arr1.includes(item)) {
      res.push(item);
    }
  });
  return res;
}

export {diffArray};
