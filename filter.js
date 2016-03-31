'use strict';

const _ = require('lodash');

const suite = require('./suite');

const items = _.range(100);

suite.run([
  {
    description: 'Native#filter',
    exec() {
      const ret = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i] % 2) {
          ret.push(items[i]);
        }
      }
    }
  },
  {
    description: 'Array#filter',
    exec() {
      items.filter(item => item % 2);
    }
  },
  {
    description: 'lodash#filter',
    exec() {
      _.filter(items, item => item % 2);
    }
  }
]);
