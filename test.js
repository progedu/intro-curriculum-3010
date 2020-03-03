'use strict';
const fs = require('fs');
const assert = require('assert');
fs.unlink('./tasks.json', (err) => {
    console.log('テスト実行のため、一旦tasks.jsonを削除します。');
    const todo = require('./index.js');
// ←ここでfs.unlink後の無名関数を区切ると、ｽｺｰﾌﾟ的にindex.jsの中のtodo関数が読めない = todo.todo('ノートを買う');でｴﾗｰが起きる
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
