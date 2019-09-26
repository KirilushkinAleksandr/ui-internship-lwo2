/**
 * @example
 * // return 1
 * removeSiblings(document.querySelector('.target'))
 * function removeSiblings takes HTML element and removes all siblings
 * @param {Object} input, HTML element
 */
function removeSiblings(input) {
  let current = input.parentNode.firstChild;
  while (current) {
    let next = current.nextSibling;
    if (current !== input) {
      document.body.removeChild(current);
    }
    current = next;
  }
}
export {removeSiblings};
