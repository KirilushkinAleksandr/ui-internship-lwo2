/**
 * @example
 * // return '1,2,3,4,5'
 * validate_bet([5, 90], "1 2 3 4 5")
 * function validate_bet checks if the bet is valid or not
 * @param {Array} game, array of unique numbers between 1 and M (both included)
 * defining the chosen game
 * @param {String} inputBet, player's bet
 * @return {Array} if the bet is valid
 * @return {String} 'None' if the bet is invalid
 */
// eslint-disable-next-line camelcase
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
// eslint-disable-next-line camelcase
export {validate_bet};
