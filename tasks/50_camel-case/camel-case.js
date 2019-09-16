// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  const words = str.split(' ');
  words[0][0] = words[0][0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    words[i][0] = words[i][0].toUpperCase();
  }
  return words.join('');
};
