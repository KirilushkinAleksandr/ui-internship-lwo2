function smallestCommons(arr) {
    let start = arr[0] < arr[1] ? arr[0] : arr[1];
    let finish = arr[0] > arr[1] ? arr[0] : arr[1];
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

