'use strict';

const suite = require('./suite');

class Person1 {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Person2 {
  constructor(name, age, gender) {
    Object.assign(this, {name, age, gender});
  }
}

suite.run([
  {
    description: 'Contructor#native',
    exec() {
      new Person1('Person', 20, '男性');
    }
  },
  {
    description: 'Constructor#assign',
    exec() {
      new Person2('Person', 20, '男性');
    }
  }
]);
