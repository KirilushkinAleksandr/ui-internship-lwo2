function confirmEnding(str, target) {
  return (str.indexOf(target, str.length - target.length) === -1)
  ? false : true;
}

export {confirmEnding};

