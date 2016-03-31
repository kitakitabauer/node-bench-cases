'use strict';

const _ = require('lodash');

const suite = require('./suite');

const items = _.range(100);

suite.run([
  {
    description: 'Array#filter',
    exec() {
      // users.filter(user => user.age % 2);
      items.filter(item => item % 2);
    }
  },
  {
    description: 'lodash#filter',
    exec() {
      // _.filter(users, user => user.age % 2);
      _.filter(items, item => item % 2);
    }
  }
]);
