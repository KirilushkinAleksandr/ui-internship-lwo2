class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }
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
  pop() {
    if (this.amount === 1) {
      this.tail = null;
      return;
    }
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.amount--;
  }
  iterate(func) {
    let item = this.head;
    for (let i = 0; i < this.amount; i++) {
      func(item);
      item = item.next;
    }
  }
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
  getNode(value = 0) {
    return {
      previous: null,
      value: value,
      next: null,
    };
  }
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
