'use strict'
const Benchmark = require('benchmark');
const _ = require('lodash');

let suite = new Benchmark.Suite;

let users = [
  {name:'a', age:10},
  {name:'b', age:20},
  {name:'c', age:30}
];

// add tests
suite.add('Array#filter', function() {
  users.filter(user => user.age);
})
.add('lodash#filter', function() {
  _.filter(users, user => user.age);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
