/**
 * @example
 * // return "II"
 * convertToRoman(2)
 * function convertToRoman converts the given number into a roman numeral
 * @param {Number} input, arabic number
 * @return {String} converted roman number as string
 */
function convertToRoman(input) {
  const res = [];
  let num = input;
  res.push(getRomanNum(num, 1000));
  num %= 1000;
  res.push(getRomanNum(num, 500));
  num %= 500;
  res.push(getRomanNum(num, 100));
  num %= 100;
  res.push(getRomanNum(num, 50));
  num %= 50;
  if (!(res[res.length - 1] === 'XC')) {
    res.push(getRomanNum(num, 10));
  }
  num %= 10;
  res.push(getRomanNum(num, 5));
  num %= 5;
  if (!(res[res.length - 1] === 'IX')) {
    res.push(getRomanNum(num, 1));
  }
  return res.join('');
}

function getRomanNum(num, step) {
  if ((step === 50 && num >= 90) || ( step === 5 && num === 9)) {
    if (num === 9) {
      step = 9;
    } else step = 90;
  } else num = Math.floor(num / step);
  if (num === 4 || num === 5) {
    step *= num;
    num = 1;
  }
  switch (step) {
    case 1: return 'I'.repeat(num);
    case 4: return 'IV';
    case 5: return 'V'.repeat(num);
    case 9: return 'IX';
    case 10: return 'X'.repeat(num);
    case 40: return 'XL';
    case 50: return 'L'.repeat(num);
    case 90: return 'XC';
    case 100: return 'C'.repeat(num);
    case 400: return 'CD';
    case 500: return 'D'.repeat(num);
    case 900: return 'CM';
    case 1000: return 'M'.repeat(num);
    default: return '';
  }
}

export {convertToRoman};

