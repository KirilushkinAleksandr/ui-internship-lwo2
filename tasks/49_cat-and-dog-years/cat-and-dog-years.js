function humanYearsCatYearsDogYears(years) {
  return [years,catAge(years),dogAge(years)];
}

function catAge(years) {
  let age = 0;
  for (let i = 1; i <= years; i++) {
    if (i === 1){
      age += 15;
      continue;
    }
    if (i === 2) {
      age += 9;
      continue;
    }
    age += 4;
  }
  return age;
}

function dogAge(years) {
  let age = 0;
  for (let i = 1; i <= years; i++) {
    if (i === 1){
      age += 15;
      continue;
    }
    if (i === 2) {
      age += 9;
      continue;
    }
    age += 5;
  }
  return age;
}

export {humanYearsCatYearsDogYears};
