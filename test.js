'use strict';
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
  // テスト処理
  const todo = require('./index.js'); // require ライブラリーやモジュールを読み込むコード。ここでは './index.js' を呼び出している。
  const assert = require('assert'); // ここでは 'assert' を呼び出している。

  // todo と list のテスト
  todo.todo('ノートを買う'); // さっき作ったオブジェクト todo を使う。
  todo.todo('鉛筆を買う');
  assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']); // todo と list、文字列と文字列が一致しているかチェック。

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
