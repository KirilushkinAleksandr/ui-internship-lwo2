function whatIsInAName(arr, searchValue) {
  const res = [];
  arr.forEach((Obj) => {
    for (let key in searchValue) {
      if (searchValue.hasOwnProperty(key)) {
        if (Obj.hasOwnProperty(key) && searchValue[key] === Obj[key]) {
          res.push(Obj);
        }
      }
    }
  });
  return res;
}

export {whatIsInAName};
