function addedChar(str1, str2) {
  const unchecked = str2.split('');
  for (let i = 0; i < str1.length; i++) {
    let index = str2.indexOf(str1[i]);
    unchecked.splice(index, 1);
  }
  return unchecked[0];
}

export {addedChar};
