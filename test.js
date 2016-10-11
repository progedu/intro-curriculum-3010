'use strict';
const assert = require('assert');

//整合性の無い、 tasks.json をリセットする
const fs = require('fs');
fs.unlink('./tasks.jason', (err) => {
    const todo = require('./index.js');

    // todo と list のテスト
    todo.todo('ノートを買う');
    todo.todo('鉛筆を買う');
    assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

    //中間確認の１
    //console.log(todo.list());

    // done と donelist のテスト
    todo.done('鉛筆を買う');
    assert.deepEqual(todo.list(), ['ノートを買う']);
    assert.deepEqual(todo.donelist(), ['鉛筆を買う']);

    //中間確認の２
    //console.log(todo.donelist());

    // del のテスト
    todo.del('ノートを買う');
    todo.del('鉛筆を買う');
    assert.deepEqual(todo.list(), []);
    assert.deepEqual(todo.donelist(), []);

    console.log('テストが正常に完了しました');

});
