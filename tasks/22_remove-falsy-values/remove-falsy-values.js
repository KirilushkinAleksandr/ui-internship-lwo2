function removeFalsyValues(arr) {
  return arr.filter((item) => item ? true : false);
}

export {removeFalsyValues};
