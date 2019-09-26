/**
 * Class to create a person
 */
class Person {
  /**
   * constructor function used to create new instances of Person
   * @param {String} fullName, person's first and last name
   */
  constructor(fullName) {
    this.setFirstName(fullName.split(' ')[0]);
    this.setLastName(fullName.split(' ')[1]);
  }
  /**
   * Getter returning person's first name
   * @return {String} Person's first name value
   */
  getFirstName() {
    return this._firstName;
  }
  /**
  * Setter to change person's first name
  * @param {String} newFirst, new first name value
  */
  setFirstName(newFirst) {
    this._firstName = newFirst;
  }
  /**
   * Getter returning person's last name
   * @return {String} Person's last name value
   */
  getLastName() {
    return this._lastName;
  }
  /**
   * Setter to change person's last name
   * @param {String} newLast, new last name value
   */
  setLastName(newLast) {
    this._lastName = newLast;
  }
  /**
   * Getter returning person's full name
   * @return {String} Person's full name value
   */
  getFullName() {
    return this.getFirstName() + ' ' + this.getLastName();
  }
  /**
   * Setter to change person's full name
   * @param {String} newFull, new full name value
   */
  setFullName(newFull) {
    this.setFirstName(newFull.split(' ')[0]);
    this.setLastName(newFull.split(' ')[1]);
  }
}

export {Person};
