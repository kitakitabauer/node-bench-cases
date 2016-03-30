'use strict'

const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

exports.run = function(benches) {
  benches.forEach(bench => suite.add(bench.description, bench.exec));

  // add listeners
  suite.on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });
}
