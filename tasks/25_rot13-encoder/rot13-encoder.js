function rot13Encoder(str) {
  let res = str.split('');
  const startLetter = 'A';
  const middleLetter = 'N';
  const lastLetter = 'Z';
  const shift = 13;
  res = res.map(function(item, pos) {
    if (item.charCodeAt(0) >= startLetter.charCodeAt() &&
    item.charCodeAt(0) <= lastLetter.charCodeAt()) {
      if (item.charCodeAt(0) >= middleLetter.charCodeAt()) {
        item = String.fromCharCode(
            item.charCodeAt(0) - shift);
        return item;
      }
      item = String.fromCharCode(
          item.charCodeAt(0) + shift);
    }
    return item;
  });
  return res.join('');
}

export {rot13Encoder};
