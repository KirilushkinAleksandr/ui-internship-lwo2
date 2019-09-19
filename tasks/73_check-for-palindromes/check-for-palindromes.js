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
