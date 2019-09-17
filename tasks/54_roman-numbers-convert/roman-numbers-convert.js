function convertToRoman(input) {
  const res = [];
  let num = input;
  res.push(returnRomanNum(num / 1000, 1000));
  num %= 1000;
  res.push(returnRomanNum(num / 500, 500));
  num %= 500;
  res.push(returnRomanNum(num / 100, 100));
  num %= 100;
  res.push(returnRomanNum(num / 50, 50));
  num %= 50;
  res.push(returnRomanNum(num / 10, 10));
  num %= 10;
  res.push(returnRomanNum(num / 5, 5));
  return res.join('');
}

function returnRomanNum(num, step) {
  let noRepeat = false;
  if (num === 4 || num === 9) {
    noRepeat = true;
  }
  switch (step) {
    case 1: return (noRepeat ? 'IV' : 'I'.repeat(num));
    case 5: return (noRepeat ? 'IX' : 'V'.repeat(num));
    case 10: return (noRepeat ? 'XL' : 'X'.repeat(num));
    case 50: return (noRepeat ? 'XC' : 'L'.repeat(num));
    case 100: return (noRepeat ? 'CD' : 'C'.repeat(num));
    case 500: return (noRepeat ? 'CM': 'D'.repeat(num));
    case 1000: return 'M'.repeat(num);
    default: return '';
  }
}

export {convertToRoman};
