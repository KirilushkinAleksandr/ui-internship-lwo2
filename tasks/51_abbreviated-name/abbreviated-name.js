/**
 * @example
 * // return Verbovyi D.
 * abbreviated('Verbovyi Dmytro')
 * function to convert a fullname in abbreviated form
 * @param {String} name, users fullname string
 * @return {string} returns abbreviated fullname as string
 */
function abbreviated(name) {
  const res = name.split(' ');
  for (let i = 1; i < res.length; i++) {
    res[i] = res[i][0] + '.';
  }
  return res.join(' ');
}

export {abbreviated};
