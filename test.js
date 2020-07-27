'use strict';
const assert = require('assert');
const fs = require('fs');
const fileName = './tasks.json';

// tasks.jsonファイルが存在する場合は削除してからテスト処理を実行する
fs.unlink(fileName, err => {
    const todo = require('./index.js');
    // テスト処理
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
});

console.log('テストが正常に完了しました');
