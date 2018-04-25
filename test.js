'use strict';
const assert = require('assert');

// テストの前に永続化されているファイルを消す
const fs = require('fs');
fs.unlink('.tasks.json', (err) => {
    const todo = require('./index.js');

    // todo と list のテスト
    odo.todo('ノートを買う');
    odo.todo('鉛筆を買う');
    ssert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

    // done と donelist のテスト
    odo.done('鉛筆を買う');
    ssert.deepEqual(todo.list(), ['ノートを買う']);
    ssert.deepEqual(todo.donelist(), ['鉛筆を買う']);

    // del のテスト
    odo.del('ノートを買う');
    odo.del('鉛筆を買う');
    ssert.deepEqual(todo.list(), []);
    ssert.deepEqual(todo.donelist(), []);

    console.log('テストが正常に完了しました');
});
