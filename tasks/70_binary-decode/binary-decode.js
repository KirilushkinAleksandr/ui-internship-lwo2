function binaryDecode(str) {
  if (!str){
    return '';
  }
  const chars = str.split(' ');
  const res =  chars.map((item) => {
    return String.fromCharCode(parseInt(item, 2));
  }
  );
  return res.join('');
}

export {binaryDecode};
