function spinalCase(str) {
  const separators = [' ', '_'];
  const arr = str.split('');
  if (arr[0] === arr[0].toUpperCase()){
    arr[0] = arr[0].toLowerCase();
  }
  for (let i = 1; i < arr.length; i++) {
    if (separators.includes(arr[i])){
      arr[i] = '-';
    }
    else if (arr[i] === arr[i].toUpperCase() && arr[i] !== '-')
    {
      arr[i] = arr[i].toLowerCase();
      if (arr[i-1] !== '-') {
        arr.splice(i, 0, '-');
        i++;
      }
    }
  }
  return arr.join('');
}

export {spinalCase};
