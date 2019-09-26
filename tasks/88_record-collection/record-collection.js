const collection = {
  '2548': {
    'album': 'Slippery When Wet',
    'artist': 'Bon Jovi',
    'tracks': [
      'Let It Rock',
      'You Give Love a Bad Name',
    ],
  },
  '2468': {
    'album': '1999',
    'artist': 'Prince',
    'tracks': [
      '1999',
      'Little Red Corvette',
    ],
  },
  '1245': {
    'artist': 'Robert Palmer',
    'tracks': [],
  },
  '5439': {
    'album': 'ABBA Gold',
  },
};

/**
 * @example
 * //return {
 * // 2548: {
 * //   album: 'Slippery When Wet',
 * //   artist: 'Bon Jovi',
 * //   tracks: [
 * //     'Let It Rock',
 * //     'You Give Love a Bad Name',
 * //   ],
 * // },
 * // 2468: {
 * //   album: '1999',
 * //   artist: 'Prince',
 * //   tracks: [
 * //     '1999',
 * //     'Little Red Corvette',
 * //   ],
 * // },
 * // 1245: {
 * //   artist: 'Robert Palmer',
 * //   tracks: [],
 * // },
 * // 5439: {
 * //   album: 'ABBA Gold',
 * //   artist: 'ABBA',
 * // },
 * //}
 * updateRecords(5439, "artist", "ABBA")
 * function updateRecords takes an album's id, a property prop,
 * and a value to modify the data in this collection.
 * @param {Number} id, unique id number of collection item
 * @param {String} prop, property of object
 * @param {String} value, value to insert in property
 * @return {Object} changed collection object
 */
function updateRecords(id, prop, value) {
  if (value !=='') {
    if (prop === 'tracks') {
      if (!collection[id][prop]) {
        collection[id][prop] = [value];
      } else {
        collection[id][prop].push(value);
      }
    } else {
      collection[id][prop] = value;
    }
  } else {
    delete collection[id][prop];
  }
  return collection;
}

export {updateRecords};
