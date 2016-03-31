'use strict';

const _ = require('lodash');

const suite = require('./suite');

const items = _.range(100);

suite.run([
  {
    description: 'Array#map',
    exec() {
      items.map(item => item.toString());
    }
  },
  {
    description: 'lodash#map',
    exec() {
      _.map(items, item => item.toString());
    }
  }
]);
