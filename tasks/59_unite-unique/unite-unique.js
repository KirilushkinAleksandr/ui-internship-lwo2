function uniteUnique(...arr) {
  const res = [];
  arr.forEach((innerArr) => {
    innerArr.forEach((item) => {
      if (!res.includes(item)) {
        res.push(item);
      }
    });
  });
  return res;
}

export {uniteUnique};
