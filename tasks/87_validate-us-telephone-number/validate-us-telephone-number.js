/**
 * @example
 * // return true
 * telephoneCheck("1 555-555-5555")
 * function telephoneCheck checks if the passed string is
 * a valid US phone number
 * @param {String} mobileNumber, telephone number to check
 * @return {Boolean} true if the passed string is a valid US phone number,
 * false if it's not
 */
function telephoneCheck(mobileNumber) {
  // eslint-disable-next-line max-len
  const regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/g;
  return regEx.test(mobileNumber);
}

export {telephoneCheck};
