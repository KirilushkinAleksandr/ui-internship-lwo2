function telephoneCheck(mobileNumber) {
  // eslint-disable-next-line max-len
  const regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/g;
  return regEx.test(mobileNumber);
}

export {telephoneCheck};
