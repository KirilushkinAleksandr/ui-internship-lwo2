function arrayPlusArray(arr1, arr2) {
  const length = Math.max(arr1.length, arr2.length);

  const res = [];

  for (let i = 0; i < length; i++) {
    res.push((arr1[i] || 0) + (arr2[i] || 0) );
  }

  return res;
}

export {arrayPlusArray};
