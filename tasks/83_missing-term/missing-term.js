function findMissing(input) {
  let step = (input[input.length - 1] - input[0])/(input.length);
  for (let i = 1; i < input.length; i++) {
    if (input[i-1] + step !== input[i]) {
      return input[i-1] + step;
    }
  }
}

export {findMissing};
