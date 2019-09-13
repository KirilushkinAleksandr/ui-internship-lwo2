class God {
  static create() {
    const man = new Man('Adam', 'male');
    const woman = new Woman('Eve', 'female');
    return [man, woman];
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name, sex) {
    super(name);
    this.sex = 'male';
  }
}
class Woman extends Human {
  constructor(name, sex) {
    super(name);
    this.sex = 'female';
  }
}

export {God, Human, Man, Woman};
