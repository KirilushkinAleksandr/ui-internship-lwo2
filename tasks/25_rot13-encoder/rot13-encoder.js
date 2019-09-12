function rot13Encoder(str) {
  let res = str.split('');
  res = res.map(function(item, pos) {
    if (item.charCodeAt(0) >= 65 &&
    item.charCodeAt(0) <= 90) {
      if (item.charCodeAt(0) >= 78) {
        item = String.fromCharCode(
            item.charCodeAt(0) - 13);
        return item;
      }
      item = String.fromCharCode(
          item.charCodeAt(0) + 13);
    }
    return item;
  });
  return res.join('');
}

export {rot13Encoder};
