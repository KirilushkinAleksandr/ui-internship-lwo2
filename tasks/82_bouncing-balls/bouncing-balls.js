/**
 * @example
 * // return 3
 * bouncingBall(3.0, 0.66, 1.5)
 * function bouncingBall counts the number of jumps in front of the window
 * @param {Number} height, starting height a ball was dropped from
 * @param {Number} bounce, coefficient of reducing height via each bounce
 * @param {Number} window, window height from the ground
 * @return {Number} how many times ball either falling or bouncing
 * in front of the window
 */
function bouncingBall(height, bounce, window) {
  let count = 0;
  let currentHeight = height;
  while ( currentHeight > window) {
    count += 2;
    currentHeight *= bounce;
  }
  return --count;
}

export {bouncingBall};
