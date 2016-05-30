'use strict';

const _ = require('lodash');

const suite = require('./suite');

class Person {
  constructor(name, age, gender) {
    Object.assign(this, {name, age, gender});
  }
}

const person = new Person('Person', 20, '男性');

suite.run([
  {
    description: 'Object#assign',
    exec() {
      Object.assign({}, person);
    }
  },
  {
    description: 'lodash#clone',
    exec() {
      _.clone(person);
    }
  }
]);
