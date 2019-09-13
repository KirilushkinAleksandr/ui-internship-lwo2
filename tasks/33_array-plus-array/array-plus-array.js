function arrayPlusArray(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    return arr1.map((item, i) =>
      item + (arr2[i]?arr2[i]:0));
  }
  return arr2.map((item, i) =>
    item + (arr1[i]?arr1[i]:0));
}

export {arrayPlusArray};
