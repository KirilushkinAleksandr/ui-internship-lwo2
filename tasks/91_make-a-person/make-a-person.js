class Person {
  constructor(fullName) {
    this._firstName = fullName.split(' ')[0];
    this._lastName = fullName.split(' ')[1];
  }

  getFirstName() {
    return this._firstName;
  }

  setFirstName(newFirst) {
    this._firstName = newFirst;
  }

  getLastName() {
    return this._lastName;
  }

  setLastName(newLast) {
    this._lastName = newLast;
  }

  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }

  setFullName(newFull) {
    this._firstName = newFull.split(' ')[0];
    this._lastName = newFull.split(' ')[1];
  }
}

export {Person};
