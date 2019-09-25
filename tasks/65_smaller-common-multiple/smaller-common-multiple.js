function smallestCommons(arr) {
  let start = Math.min(arr[0], arr[1]);
  let finish = Math.max(arr[0], arr[1]);
  for (let i = start; i <= finish; i++) {
    let tempIndex = i;
    let tempRes = start;
    while (tempRes && tempIndex) {
        tempRes > tempIndex ? tempRes %= tempIndex : tempIndex %= tempRes;
    }
    start = (start * i) / (tempRes + tempIndex);
  }
  return start;
}

export {smallestCommons};

