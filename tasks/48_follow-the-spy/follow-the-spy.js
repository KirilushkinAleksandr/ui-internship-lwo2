function sortCountries(a, b) {
  if (a[1] === b[0]) {
    return -1;
  }
  if (a[0] === b[1]) {
    return a[0];
  }
  return 0;
}

function followTheSpy(routes) {
  return routes.sort(sortCountries).reduce(
      (sum, item, index) => {
        if (index === 0) {
          return sum.concat(item[0] + ', ' + item[1] + ', ');
        }
        if (index === routes.length - 1) {
          return sum.concat(item[1]);
        }
        return sum.concat(item[1] + ', ');
      },
      ''
  );
}

export {followTheSpy};
