'use strict';
const assert = require('assert');
const fs = require('fs');

// unlink 関数(ファイルを非同期的に削除する)
fs.unlink('./tasks.json', (err) => {
	//テスト処理を以下に書く

  //JSONを削除してから読み込み
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
