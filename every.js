'use strict';

const _ = require('lodash');

const suite = require('./suite');

const users = [
  {
    user: 'barney',
    age: 36,
    active: false
  },
  {
    user: 'fred',
    age: 40,
    active: false
  }
];

suite.run([
  {
    description: 'Array#every',
    exec() {
      users.every(user => user.active === false);
    }
  },
  {
    description: 'lodash#every',
    exec() {
      _.every(users, ['active', false]);
    }
  }
]);
