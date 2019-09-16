function abbreviated(name) {
  const res = name.split(' ');
  for (let i = 1; i < res.length; i++) {
    res[i] = res[i][0] + '.';
  }
  return res.join(' ');
}

export {abbreviated};
