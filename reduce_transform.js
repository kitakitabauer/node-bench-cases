'use strict';
/* eslint no-param-reassign: [2, { "props": false } ] */

const _ = require('lodash');

const suite = require('./suite');

const items = _.range(100);

suite.run([
  {
    description: 'lodash#reduce',
    exec() {
      _.reduce(items, (memo, idx) => {
        memo[idx] = true;
        return memo;
      }, {});
    }
  },
  {
    description: 'lodash#transform',
    exec() {
      _.transform(items, (memo, idx) => {
        memo[idx] = true;
      }, {});
    }
  }
]);
