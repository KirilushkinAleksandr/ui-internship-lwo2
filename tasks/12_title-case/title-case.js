function titleCase(str) {
  let res = str.split(' ');
  res = res.map((item) =>
    item = item[0].toUpperCase() + item.slice(1).toLowerCase());
  return res.join(' ');
}
export {titleCase};
