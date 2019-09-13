function rowWeights(arr) {
  const result = [0, 0];
  for (let i = 0; i < arr.length; i+=2) {
    result[0] += arr[i];
  }

  for (let i = 1; i < arr.length; i+=2) {
    result[1] += arr[i];
  }
  return result;
}

export {rowWeights};
