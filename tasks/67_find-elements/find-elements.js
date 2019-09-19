function findElement(arr, func) {
  const resIndex = arr.findIndex(func);
  return arr[resIndex];
}

export {findElement};
