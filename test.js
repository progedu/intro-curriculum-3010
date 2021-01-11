'use strict';
const fs = require('fs');

// ファイルを削除してからテストを行う
fs.unlink('./tasks.json', err => {
    if (err) {
        console.log('ファイルの削除に失敗しました');
    } else {
        console.log('ファイルを削除しました');
    }
    const todo = require('./index.js');
    const assert = require('assert');
    
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
