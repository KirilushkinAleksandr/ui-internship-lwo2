function fatFingers(input) {
  const letters = input.split('');
  let capsLock = false;
  for (let i = 0; i < letters.length; i++) {
    if (capsLock) {
      if (letters[i] === letters[i].toUpperCase()) {
        letters[i] = letters[i].toLowerCase();
      } else (letters[i] = letters[i].toUpperCase());
    }
    if (letters[i] === 'A' || letters[i] === 'a') {
      if (capsLock) {
        capsLock = false;
      } else (capsLock = true);
      letters.splice(i, 1);
      i--;
    }
  }
  return letters.join('');
}

export {fatFingers};
