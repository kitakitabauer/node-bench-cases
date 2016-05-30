'use strict';

const _ = require('lodash');

const suite = require('./suite');

const users = [
  {name: 'a', age: 10, gender: 'female'},
  {name: 'b', age: 20, gender: 'male'},
  {name: 'c', age: 30, gender: 'female'},
];

suite.run([
  {
    description: 'Object#assign',
    exec() {
      Object.assign([], users);
    }
  },
  {
    description: 'lodash#clone',
    exec() {
      _.clone(users);
    }
  }
]);
