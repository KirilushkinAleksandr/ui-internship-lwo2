function stringExpansion(str) {
  let n = 1;
  return Array.from(str).reduce(
      (sum, item, index) => {
        if (item.toString().match(/\d/)) {
          n = item;
          return sum;
        }
        return sum.concat(item.toString().repeat(n));
      },
      ''
  );
}

export {stringExpansion};
