/**
 * @example
 * // return outputs to the log: 1 2 99 100
 * traverseTree({
 * value: 1,
 * children: [
 *     {
 *         value: 2,
 *         children: []
 *     }, {
 *         value: 99,
 *         children: [
 *             {
 *                 value: 100,
 *                 children: []
 *             }
 *         ]
 *     }
 * ]
 * }, callback(argument) { console.log(argument); })
 * function traverseTree that is able to traverse an n-niry tree
 * @param {Object} tree, passed tree itself
 * @param {Function} func, callback function to iterate through tree
 */
function traverseTree(tree, func) {
  for (const key in tree) {
    if (tree.hasOwnProperty(key)) {
      if (Array.isArray(tree[key])) {
        for (let i = 0; i < tree.children.length; i++) {
          traverseTree(tree.children[i], func);
        }
      }
    }
  }
  func(tree);
}

export {traverseTree};

