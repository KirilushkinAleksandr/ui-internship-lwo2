function insert(input, str = '', pos = 0) {
  const res = input.split('');
  res.splice(pos, 0, ...str.split(''));
  return res.join('');
}

export {insert};
