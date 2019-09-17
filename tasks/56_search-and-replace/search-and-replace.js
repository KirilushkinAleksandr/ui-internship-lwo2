function myReplace(str, before, after) {
  const res = str.split('');
  return res.splice(str.indexOf(before[0]), before.length, after);
}

export {myReplace};
