'use strict';
// const todo = require('./index.js');
const assert = require('assert');

const fs = require('fs');
// 非同期処理でも順序を制御し、永続化されてデータが残ってる tasks.json ファイルを削除した後テストを実行する
// (削除するファイルのpath、callback関数)
fs.unlink('./tasks.json', (err) => {
    // 5つの関数がまとめられてるパッケージを todo_module 変数に代入
    const todo_module = require('./index.js');

    // todo と list のテスト
    todo_module.todo('ノートを買う');
    todo_module.todo('鉛筆を買う');
    assert.deepEqual(todo_module.list(), ['ノートを買う', '鉛筆を買う']);

    // done と donelist のテスト
    todo_module.done('鉛筆を買う');
    assert.deepEqual(todo_module.list(), ['ノートを買う']);
    assert.deepEqual(todo_module.donelist(), ['鉛筆を買う']);

    // del のテスト
    todo_module.del('ノートを買う');
    todo_module.del('鉛筆を買う');
    assert.deepEqual(todo_module.list(), []);
    assert.deepEqual(todo_module.donelist(), []);

    console.log('テストが正常に完了しました');
});