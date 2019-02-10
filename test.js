'use strict';
const todo = require('./index.js');
const assert = require('assert');

const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
  // todoとlistのテスト
  todo.todo('ノートを買う');
  todo.todo('鉛筆を買う');
  assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
  
  // doneとdonelistのテスト
  todo.done('ノートを買う');
  assert.deepEqual(todo.list(), ['鉛筆を買う']);
  assert.deepEqual(todo.donelist(), ['ノートを買う']);
  
  // delのテスト
  todo.del('鉛筆を買う');
  todo.del('ノートを買う');
  assert.deepEqual(todo.list(), []);
  assert.deepEqual(todo.donelist(), []);
  
  console.log('テストが正常に終了しました');
});
