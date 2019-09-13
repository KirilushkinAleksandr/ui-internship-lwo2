function uniqueInOrder(input) {
  const arr = Array.isArray(input) ? arr : input.split('');
  return arr.filter(
      function(item, index) {
        return input.indexOf(item) === index;
      }
  );
}

export {uniqueInOrder};
