'use strict';
//yarn test前に、[['鉛筆を買う', false]]を含むtasks.jsonを作成しておく。

const assert = require('assert');
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
    //fs.unlinkする前にrequire(index.js)すると、
    //todoリストを読み込んだあとにtasks.jsonを削除するため、
    //テスト結果が一致せずエラーになる。
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

    //繰り返しテストを行っても正常終了するか確認のため。
    todo.todo('鉛筆を買う');
});
