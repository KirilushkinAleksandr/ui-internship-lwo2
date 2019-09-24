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

