'use strict';

// テスト処理の前に既存のtasks.jsonファイルを削除する
const fs = require('fs');
fs.unlink('./tasks.json', (err) => { // ./tasks.jsonファイルを非同期的に削除
    // テスト処理

    const todo = require('./index.js');
    const assert = require('assert'); // テスト用モジュールの呼び出し

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
