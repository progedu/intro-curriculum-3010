'use strict';
const todo = require('./index.js');
const assert = require('assert');

//ファイル削除
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
    // todo と list のテスト
    todo.todo('鉛筆を買う');
    assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
    todo.todo('ノートを買う');

    todo.done('鉛筆を買う');
    // done と donelist のテスト
    assert.deepEqual(todo.donelist(), ['鉛筆を買う']);
    assert.deepEqual(todo.list(), ['ノートを買う']);

    todo.del('ノートを買う');
    // del のテスト
    assert.deepEqual(todo.list(), []);
    todo.del('鉛筆を買う');
    
    assert.deepEqual(todo.donelist(), []);
    console.log('テストが正常に完了しました');
});



