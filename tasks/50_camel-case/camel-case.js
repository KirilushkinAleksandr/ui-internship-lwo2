// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  const words = this.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join('');
};
