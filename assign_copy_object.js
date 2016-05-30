'use strict';

const _ = require('lodash');

const suite = require('./suite');

const users = {
  a: {name: 'a', age: 10, gender: 'female'},
  b: {name: 'b', age: 20, gender: 'male'},
  c: {name: 'c', age: 30, gender: 'female'}
};

suite.run([
  {
    description: 'Object#assign',
    exec() {
      Object.assign({}, users);
    }
  },
  {
    description: 'lodash#clone',
    exec() {
      _.clone(users);
    }
  }
]);
