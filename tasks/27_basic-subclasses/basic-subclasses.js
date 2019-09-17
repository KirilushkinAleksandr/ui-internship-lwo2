class God {
  static create() {
    const man = new Man('Adam');
    const woman = new Woman('Eve');
    return [man, woman];
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
    this.sex = 'male';
  }
}
class Woman extends Human {
  constructor(name) {
    super(name);
    this.sex = 'female';
  }
}

export {God, Human, Man, Woman};
