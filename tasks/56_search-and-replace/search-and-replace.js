function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    const origCase = after[0].toUpperCase() + after.slice(1);
    return str.replace(before, origCase);
  }
  return str.replace(before, after);
}

export {myReplace};
