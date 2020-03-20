'use strict';
const todo = require('./index.js');
const assert = require('assert');
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {//unlinkとは第一引数のファイルを削除して、第二引数はコールバックとなっており、削除処理が終わってから実行する
// todo と list のテスト
todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

// done と donelist のテスト
todo.done('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う']);
assert.deepEqual(todo.donelist(), ['鉛筆を買う']);

// del のテスト
todo.del('ノートを買う');
todo.del('鉛筆を買う');
assert.deepEqual(todo.list(), []);
assert.deepEqual(todo.donelist(), []);

console.log('テストが正常に完了しました');
})
