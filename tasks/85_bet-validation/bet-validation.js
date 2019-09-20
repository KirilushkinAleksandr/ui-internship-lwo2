function validate_bet(game, inputBet) {
  const numbersRegEx = /\d+|;/g;
  const numbersInput = inputBet.match(numbersRegEx);
  const invalidInput = 'None';
  numbersInput.sort((a, b) => a - b);
  if (numbersInput.length !== game[0]) {
    return invalidInput;
  }
  for (let i = 0; i < numbersInput.length; i++) {
    if (numbersInput[i] > game[1]) {
      return invalidInput;
    }
  }
  return numbersInput;
}

export {validate_bet};
