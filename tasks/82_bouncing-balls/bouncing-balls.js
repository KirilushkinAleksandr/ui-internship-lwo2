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
