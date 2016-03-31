'use strict';

const _ = require('lodash');

const suite = require('./suite');

const items = _.range(100);

suite.run([
  {
    description: 'Array#reduce',
    exec() {
      items.reduce((sum, current) => sum + current);
    }
  },
  {
    description: 'lodash#reduce',
    exec() {
      _.reduce(items, (sum, current) => sum + current);
    }
  }
]);
