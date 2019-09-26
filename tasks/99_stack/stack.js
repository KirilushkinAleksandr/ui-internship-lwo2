/**
 * Class representing a stack data - structure
 */
class Stack {
  /**
   * Creates new instance of stack
   */
  constructor() {
    this.size = 0;
    this.isEmpty = true;
    this.last = null;
  }
  /**
   * Pushes new item on top of the stack
   * @param {Number} value, integer to be pushed in stack
   * @return {Object} current stack instance
   */
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
  /**
   * Removes item from the top of the stack
   * @return {Number} removed item
   */
  pop() {
    if (!this.isEmpty) {
      const value = this.last.value;
      this.last = this.last.prev;
      return value;
    }
  }
}

export {Stack};
