function deepClone(inputObj) {
  const clone = {};
  for (let key in inputObj) {
    if (typeof inputObj[key] === 'object') {
      clone[key] = deepClone(inputObj[key]);
    } else clone[key] = inputObj[key];
  }
  return clone;
}

export {deepClone};
