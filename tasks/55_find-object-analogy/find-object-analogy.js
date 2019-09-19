function whatIsInAName(arr, searchValue) {
  const res = [];
  arr.forEach((obj) => {
    for (let key in searchValue) {
      if (searchValue.hasOwnProperty(key)) {
        if (obj.hasOwnProperty(key) && searchValue[key] === obj[key]) {
          res.push(obj);
        }
      }
    }
  });
  return res;
}

export {whatIsInAName};
