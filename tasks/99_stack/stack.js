class Stack {
  constructor() {
    this.size = 0;
    this.isEmpty = true;
    this.last = null;
  }

  push(value) {
    const newNode = {
      value: value,
      prev: null,
    };
    if (this.isEmpty) {
      this.last = newNode;
      this.size++;
      this.isEmpty = false;
      return this;
    }
    newNode.prev = this.last;
    this.last = newNode;
    this.size++;
  }

  pop() {
    if (!this.isEmpty) {
      const value = this.last.value;
      this.last = this.last.prev;
      return value;
    }
  }
}

export {Stack};
