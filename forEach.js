'use strict';

const _ = require('lodash');

const suite = require('./suite');

const arr = _.range(10000);

suite.run([
  {
    description: 'Array#forEach',
    exec() {
      arr.forEach(num => num * 2);
    }
  },
  {
    description: 'lodash#forEach',
    exec() {
      _.forEach(arr, num => num * 2);
    }
  }
]);
