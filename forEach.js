'use strict'
const _ = require('lodash');

const suite = require('./suite');

let arr = _.range(10000);

suite.run([
  {
    description: 'Array#forEach',
    exec: function() {
      arr.forEach(num => num * 2);
    }
  },
  {
    description: 'lodash#forEach',
    exec: function() {
      _.forEach(arr, num => num * 2);
    }
  }
]);
