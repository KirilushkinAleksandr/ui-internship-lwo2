function validBraces(input) {
  const res = input.split('');
  const matches = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let isValid = false;
  let openBrace = res[0];
  for (let i = 1; i < res.length; i++) {
    if (res[i] in matches) {
      openBrace = res[i];
    } else {
      isValid = (res[i] === matches[openBrace]);
    }
  }
  return isValid;
}

export {validBraces};
