function sym(...arrs) {
  let res = [];
  for (let i = 0; i < arrs.length; i++) {
    res = symmDiff(res, arrs[i]);
  }
  return res.sort((a, b) => a - b);
}

function symmDiff(inputArr1, inputArr2) {
  const arr1 = Array.from(new Set(inputArr1));
  const arr2 = Array.from(new Set(inputArr2));
  const res = [];
  return res.concat(
      arr1.filter((item) => !arr2.includes(item)),
      arr2.filter((item) => !arr1.includes(item))
  );
}

export {sym};
