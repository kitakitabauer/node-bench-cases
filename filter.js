'use strict';

const _ = require('lodash');

const suite = require('./suite');

const users = [
  {name: 'a', age: 10},
  {name: 'b', age: 20},
  {name: 'c', age: 30},
  {name: 'd', age: 40},
  {name: 'e', age: 50}
];

suite.run([
  {
    description: 'Array#filter',
    exec() {
      users.filter(user => user.age % 2);
    }
  },
  {
    description: 'lodash#filter',
    exec() {
      _.filter(users, user => user.age % 2);
    }
  }
]);
