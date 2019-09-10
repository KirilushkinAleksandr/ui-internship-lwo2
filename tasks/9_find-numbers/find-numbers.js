function getNumbers(str) {
  const regex = /\d+/g;
  let digitsArr = str.match(regex);
  for (let index = 0; index < digitsArr.length; index++) {
    digitsArr[index] = +digitsArr[index];
  }
  return digitsArr;
}

export {getNumbers};
