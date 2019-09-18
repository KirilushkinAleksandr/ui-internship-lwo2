function swapCases(input) {
  const res = input.split('');
  return res.map(
      function(item) {
        if (item === item.toUpperCase()) {
          return item.toLowerCase();
        }
        return item.toUpperCase();
      }
  ).join('');
}

export {swapCases};
