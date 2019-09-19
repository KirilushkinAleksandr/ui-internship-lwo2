function binaryEncode(input) {
  if (!input) {
    return '';
  }
  const chars = input.split('');
  const res = chars.map((item, i) => {
    const binary = parseInt(item.charCodeAt(0)).toString(2);
    return '0'.repeat(8 - binary.length) + binary;
  }
  );
  return res.join(' ');
}

export {binaryEncode};
