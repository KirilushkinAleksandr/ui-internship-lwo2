class God {
  static create() {
    return [new Man('Adam', 'male'), 
      new Woman('Eve', 'female')];
  }
}

class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Man extends Human {
  constructor(name, sex) {
    super(name, sex);
  }
}
class Woman extends Human {
  constructor(name, sex) {
    super(name, sex);
  }
}

export {God, Human, Man, Woman};
