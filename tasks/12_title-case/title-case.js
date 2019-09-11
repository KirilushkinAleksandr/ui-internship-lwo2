function titleCase(str) {
  let arr = str.split(' ');
  arr = arr.map((item) =>
    item = item[0].toUpperCase() + item.slice(1).toLowerCase());
  return arr.join(' ');
}
export {titleCase};
