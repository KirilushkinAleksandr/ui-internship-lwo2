function updateInventory(inputInventory, inputDelivery) {
  const inventory = inputInventory.slice();
  const newItems = inputDelivery.slice();
  for (let i = 0; i < newItems.length; i++) {
    for (let j = 0; j < inventory.length; j++) {
      if (inventory[j][1] === newItems[i][1]) {
        inventory[j][0] += newItems[i][0];
        newItems.splice(i, 1);
      }
    }
  }
  inventory.push(...newItems);
  return inventory.sort((a, b) => a[1] > b[1]);
}

export {updateInventory};
