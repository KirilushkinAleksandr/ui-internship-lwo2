function dropElements(arr, inputFunc) {
  const res = arr.slice();
  for (let i = 0; i < res.length; i++) {
    if (inputFunc(res[i])){
      return res;
    }
    res.shift();
    i--;
  }
  return res;
}

export {dropElements};
