function humanizeFormat(number) {
  if (!Number.isFinite(number)) {
    return '';
  }
  let lastDigit = number.toString();
  lastDigit = lastDigit[lastDigit.length - 1];
  switch (lastDigit) {
    case '1':
      return number + 'st';
    case '2':
      return number + 'nd';
    case '3':
      return number + 'rd';
    default:
      return number + 'th';
  }
}

export {humanizeFormat};
