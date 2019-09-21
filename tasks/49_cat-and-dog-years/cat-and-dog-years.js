function humanYearsCatYearsDogYears(years) {
  let catAge = 15;
  let dogAge = 15;
  if (years >= 2) {
    catAge = dogAge += 9;
  }
  for (let i = 3; i <= years; i++) {
    catAge += 4;
    dogAge += 5;
  }
  return [years, catAge, dogAge];
}

export {humanYearsCatYearsDogYears};
