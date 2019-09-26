/**
 * @example
 * // return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"],
 * // [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
 * updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"],
 * [0, "Microphone"]], [[1, "Hair Pin"], [1,* "Half-Eaten Apple"],
 * [1, "Bowling Ball"], [1, "Toothpaste"]])
 * function updateInventory compares and updates an inventory
 * stored in a 2D array with the new items passed as a 2nd argument.
 * @param {Array} inputInventory, current inventory
 * @param {Array} inputDelivery, new items
 * @return {Array} updated inventory in alphabetical order by item
 */
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
