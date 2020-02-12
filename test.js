'use strict';
// const todo = require('./index.js');
const assert = require('assert');
const fs = require('fs');

// テストの前に永続化されているファイルを消す
fs.unlink('./tasks.json', (err) => { //unlink 関数に渡す無名関数（コールバック関数）の中で処理をすることで、 非同期処理でも順序を制御し、tasks.json ファイルが削除された後テストを実行することができます
  const todo = require('./index.js');

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
});