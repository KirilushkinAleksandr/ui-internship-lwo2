/**
 * @example
 * //return true
 * palindrome('eye')
 * function palindrome checks if the given string is a palindrome
 * @param {String} input, passed string
 * @return {Boolean} boolean value representing
 * if string is a palindrome or not
 */
function palindrome(input) {
  const regEx = /[A-Za-z0-9]/g;
  const arr = input.toLowerCase().match(regEx);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

export {palindrome};
