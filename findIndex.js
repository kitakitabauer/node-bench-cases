'use strict';

const _ = require('lodash');

const suite = require('./suite');

const users = [];
for (let i = 0; i < 100; i++) {
  users.push({name: i.toString(), age: i});
}

suite.run([
  {
    description: 'Array#findIndex',
    exec() {
      users.findIndex(user => user.age > 30);
    }
  },
  {
    description: 'lodash#findIndex',
    exec() {
      _.findIndex(users, user => user.age > 30);
    }
  }
]);
