function maxProduct(arr) {
  const multis = [];
  for (let i = 0; i < arr.length - 1; i++) {
    multis.push(arr[i] * arr[i + 1]);
  }
  return multis.sort((a, b) => a - b).pop();
}

export {maxProduct};
