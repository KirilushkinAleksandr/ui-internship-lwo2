function trimWhiteSpaces(str) {
  let tempArr = str.split(' ');
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] == ' ') {
      tempArr.splice(i, 1);
    }
  }
  return tempArr.join('');
}

export {trimWhiteSpaces};
