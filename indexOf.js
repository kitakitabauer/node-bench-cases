'use strict';

/**
 * Buffer#indefOfメソッド追加によるベンチ
 *
 * 結論：ファイル内の文字数が多ければ多いほどStringへの変換コストが大きくなり、
 * Bufferの方が速くなるが、文字数が少ない または 一度変換したものを使い回すようなケースではStringの方が速い
 */
const fs = require('fs');

const suite = require('./suite');

fs.readFile(`${__dirname}/test.txt`, (err, buf) => {
  suite.run([
    {
      description: 'String#indexOf',
      exec() {
        const str = buf.toString('utf8');
        str.indexOf('kitakitabauer');
      }
    },
    {
      description: 'Buffer#indexOf',
      exec() {
        buf.indexOf('kitakitabauer');
      }
    }
  ]);
});

