function truncateString(str, num) {
  if (num <= 3) {
    return str.slice(0, num) + '...';
  }
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num - 3) + '...';
}

export {truncateString};
