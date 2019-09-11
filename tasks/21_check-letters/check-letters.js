function checkLetters(arr) {
  arr[0] = arr[0].toUpperCase();
  arr[1] = arr[1].toUpperCase();
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1][i]) === -1) {
      return false;
    }
  }
  return true;
}

export {checkLetters};
