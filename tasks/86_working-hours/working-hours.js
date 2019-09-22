function formatWorkingHours(inputArr) {
  const arr = inputArr.slice();
  const temp = arr.shift();
  arr.push(temp);
  let day = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]['from'] !== day['from'] || arr[i]['to'] !== day['to']) {
      const startIndex = arr.indexOf(day);
      arr.splice(startIndex, i - startIndex, concatDays(arr[i - 1], arr[i]));
      day = arr[i];
    }
  }
  return arr.map(convertDayToString);
}

function concatDays(start, end) {
  start['day'] = `${start['day'].toUpperCase()} - ${end['day'].toUpperCase()}`;
  return start;
}

function convertDayToString(inputObj) {
  return `${inputObj['day'].toUpperCase()}: ` +
        `${inputObj['from']} - ${inputObj['to']}`;
}

export {formatWorkingHours};
