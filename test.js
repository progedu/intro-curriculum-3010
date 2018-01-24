'use strict';
const todo = require('./index.js');
const assert = require('assert');

const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
    //テスト処理


    // todoとlistのテスト
    todo.todo('ノートを買う');
    todo.todo('鉛筆を買う');
    assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);


    // doneとdonelistのテスト
    todo.done('鉛筆を買う');
    assert.deepEqual(todo.list(), ['ノートを買う']);
    assert.deepEqual(todo.donelist(), ['鉛筆を買う']);


    //delのテスト
    todo.del('ノートを買う');
    todo.del('鉛筆を買う');
    assert.deepEqual(todo.list(), []);
    assert.deepEqual(todo.donelist(), []);


    console.log('The test was completed successfully.');
});
