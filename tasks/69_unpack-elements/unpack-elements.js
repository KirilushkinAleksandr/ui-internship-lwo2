function unpackArray(arr) {
  const res = [];

  (function recursion(arr) {
    arr.map((item) => {
      if (Array.isArray(item)){
        if (recursion((item))) {
          res.push(recursion(item));
        }
      }
      else {
        res.push(item);
      }
    });
  })(arr);
  return res;
}

export {unpackArray};
