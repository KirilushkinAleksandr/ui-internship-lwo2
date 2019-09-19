function addTogether(...input) {
  if (typeof(input[0]) !== 'number' ) {
    return;
  }
  let sum = input[0];
  if (!input[1]) {
    return (input) => {
      if (typeof(input) !== 'number' ) {
        return;
      }
      return sum + input;
    };
  }
  if (typeof(input[1]) !== 'number' ) {
    return;
  }
  return sum + input[1];
}

export {addTogether};
