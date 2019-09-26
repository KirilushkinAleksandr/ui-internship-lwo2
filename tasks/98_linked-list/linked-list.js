/**
 * Class representing a linked list data - structure
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }
  /**
   * inserts new value at the tail of list
   * @param {Number} value, passed value to be added at list head
   * @return {Object} current object instance
   */
  push(value) {
    const newNode = this.getNode(value);
    if (this.amount === 0) {
      this.head = newNode;
      this.amount++;
      return this;
    }
    if (this.amount === 1) {
      this.tail = newNode;
      this.tail.previous = this.head;
      this.head.next = this.tail;
      this.amount++;
      return this;
    }
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.amount++;
  }
  /**
   * removes value from the tail of the list
   */
  pop() {
    if (this.amount === 1) {
      this.tail = null;
      return;
    }
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.amount--;
  }
  /**
   * Uses passed function for each list item
   * @param {Function} func, callback to be used for each list item
   */
  iterate(func) {
    let item = this.head;
    for (let i = 0; i < this.amount; i++) {
      func(item);
      item = item.next;
    }
  }/**
   * Inserts new node after one with specified value
   * @param {Number} insertAfter, existing node value
   * @param {Number} toInsert, new node value
   * @return {Boolean} should return false if insertAfter value doesn't exist
   */
  insertAfter(insertAfter, toInsert) {
    let foundItem;
    this.iterate((item) => {
      if (item.value === insertAfter) {
        foundItem = item;
      }
    });
    if (!foundItem) {
      return false;
    }
    const newNode = this.getNode(toInsert);
    foundItem.next.previous = newNode;
    newNode.previous = foundItem;
    newNode.next = foundItem.next;
    foundItem.next = newNode;
    this.amount++;
  }
  /**
   * Returns new node instance with empty links
   * @param {Number} value, passed value of new node,
   * 0 if nothing was passed
   * @return {Object} new node instance
   */
  getNode(value = 0) {
    return {
      previous: null,
      value: value,
      next: null,
    };
  }
  /**
   * Removes item with passed value from list
   * @param {Number} input, value of removing item
   * @return {Boolean} success of remove operation
   */
  removeItem(input) {
    let foundItem;
    this.iterate((item) => {
      if (item.value === input) {
        foundItem = item;
      }
    });
    if (!foundItem) {
      return false;
    }
    foundItem.previous.next = foundItem.next;
    foundItem = null;
    return true;
  }
}

export {LinkedList};
