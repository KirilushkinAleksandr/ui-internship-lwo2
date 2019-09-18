function uniqueInOrder(input) {
  const arr = Array.isArray(input) ? arr : input.split('');
  return arr.filter((item, index) => input.indexOf(item) === index);
}

export {uniqueInOrder};
