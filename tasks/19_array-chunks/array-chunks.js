function arrayChunks(arr, num) {
  const result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < num; j++) {
      temp.push(arr[i]);
      i++;
      if (i >= arr.length) {
        break;
      }
    }
    i--;
    result.push(temp);
    temp = [];
  }
  return result;
}

export {arrayChunks};
