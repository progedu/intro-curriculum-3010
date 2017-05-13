'use strict';
const assert = require('assert');

// タスクファイル（tasks.json）が削除された後テストを実行
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
    //モジュール(./index.js)の読み込み、タスクファイルの読み込み(削除されてるので読み込みは必ず失敗)
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