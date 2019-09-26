/**
 * @example
 * // return 6
 * expressionMatter(2, 1, 2)
 * function expressionMatter returns the largest number obtained
 *  after inserting the following operators and brackets: +, *, ()
 * @param {Number} a, passed integer
 * @param {Number} b, passed integer
 * @param {Number} c, passed integer
 * @return {Number} largest possible number
 * after inserting the operators and brackets
 */
function expressionMatter(a, b, c) {
  const results = [
    a * b + c,
    a * (b + c),
    a * b * c,
    a + b + c,
    a + b * c,
    (a + b) * c,
  ];
  return Math.max(...results);
}

export {expressionMatter};
