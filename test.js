'use strict';
const todo = require('./index.js');
const assert = require('assert');
const fs = require('fs');

/**
 * unlink関数を使って、第一引数に入っているファイルが存在しなかった場合、引数errにエラー内容を代入
 */
// todo と list のテスト
fs.unlink('./tasks.json', err => {
todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
});

// done と donelist のテスト
fs.unlink('./tasks.json', err => {
todo.done('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う']);
assert.deepEqual(todo.donelist(), ['鉛筆を買う']);
});

// del のテスト
fs.unlink('./tasks.json', err => {
todo.del('ノートを買う');
todo.del('鉛筆を買う');
assert.deepEqual(todo.list(), []);
assert.deepEqual(todo.donelist(), []);
});

console.log('テストが正常に完了しました');
