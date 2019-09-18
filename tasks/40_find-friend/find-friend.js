function findFriend(arr) {
  return arr.reduce(function(count, item, index) {
    if (item === 'red') {
      if (arr[index - 1] === 'blue'
      && (arr[index - 2] === 'blue'
      || arr[index + 1] === 'blue')) {
        count++;
      }
      if (arr[index + 1] === 'blue'
      && (arr[index + 2] === 'blue'
      || arr[index - 1] === 'blue')) {
        count++;
      }
    }
  }, 0);
}

export {findFriend};
