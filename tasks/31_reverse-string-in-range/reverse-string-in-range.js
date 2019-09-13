function reverseStringInRange(str, range) {
  let arr = str.split('');
  const reversed = arr.slice(range[0], range[1]+1).reverse();
  arr.splice(range[0], range[1]-1, ...reversed);
  return arr.join('');
}

export {reverseStringInRange};
