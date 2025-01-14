const contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin'],
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['Javascript', 'Gaming', 'Foxes'],
  },
];

function lookupProfile(firstName, prop) {
  for (const item of contacts) {
    if (item.firstName === firstName) {
      for (const key in item) {
        if (item.hasOwnProperty(prop)) {
          if (key !== 'firstName') {
            return item[prop];
          }
        }
      }
      return 'No such property';
    }
  }
  return 'No such contact';
}

export {lookupProfile};
