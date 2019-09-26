/**
 * @example
 * // return [1,2,3,4]
 * unpackArray([1, [2], [3, [[4]]]])
 * function unpackArray recursively flattens a nested array
 * @param {Array} arr, passed array of numbers with different level of nesting
 * @return {Array} array without nesting
 */
function unpackArray(arr) {
  const res = [];
  (function recursion(arr) {
    arr.map((item) => {
      if (Array.isArray(item)) {
        if (recursion((item))) {
          res.push(recursion(item));
        }
      } else {
        res.push(item);
      }
    });
  })(arr);
  return res;
}

export {unpackArray};
