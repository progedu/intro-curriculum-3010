'use strict';
const assert = require('assert');

// tasks.jsonファイルがある場合、それを削除する
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {

    // index.jsが呼ばれた時にtasks.jsonの有無チェックが
    // 行われるので、ファイルを削除してからindex.jsを
    // 呼び出す
    // このため、テスト時には常に
    // 「./tasks.jsonから復元できませんでした]
    // と表示される
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
