'use strict';

const _ = require('lodash');

const suite = require('./suite');

const users = [];
for (let i = 0; i < 100; i++) {
  users.push({name: i.toString(), age: i});
}

suite.run([
  {
    description: 'Array#find',
    exec() {
      users.find(user => user.age > 30);
    }
  },
  {
    description: 'lodash#find',
    exec() {
      _.find(users, user => user.age > 30);
    }
  }
]);
