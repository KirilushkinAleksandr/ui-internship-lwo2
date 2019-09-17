function maxTripletSum(arr) {
  arr.sort((a, b) => b - a);
  const resArr = [];
  arr.forEach((item) => !resArr.includes(item) && resArr.push(item));
  return resArr[0] + resArr[1] + resArr[2];
}

export {maxTripletSum};
