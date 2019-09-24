'use strict';
const assert = require('assert');

// テストの前に永続化されているファイルを消す
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
    const todo = require('./index.js');

    // todo の list のテスト
    todo.todo('ノートを買う');
    todo.todo('鉛筆を買う');
    assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
    //ディープイコールdeepEqual関数　右と左を比べる関数

    // done と doneList のテスト
    todo.done('鉛筆を買う');
    assert.deepEqual(todo.list(), ['ノートを買う']);
    assert.deepEqual(todo.doneList(), ['鉛筆を買う']);

    // undone のテスト
    todo.undone('鉛筆を買う');
    assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
    assert.deepEqual(todo.doneList(), []);

    // del のテスト
    todo.del('ノートを買う');
    todo.del('鉛筆を買う');
    assert.deepEqual(todo.list(), []);
    assert.deepEqual(todo.doneList(), []);

    console.log('テストが正常に完了しました');

});