function findCloseIndex(str, index) {
  if (str[index] !== '('){
    return -1;
  }
  let count = 0;
  for (let i = index + 1; i < str.length; i++) {
    if (str[i] === '('){
      count++;
    }
    if (str[i] === ')'){
      if (count === 0){
        return i;
      }
      count--;
    }
  }
  return -1;
}

export {findCloseIndex};
