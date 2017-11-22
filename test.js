'use strict';
const assert = require('assert');

const fs = require('fs');
// 最初に tasks.json を削除し、タスクを真っ新な状態から始めることでエラーを回避する
fs.unlink('./tasks.json', (err) => {			
	const todo = require('./index.js');	// todo モジュールを読み込み、タスクも作り直す
	test_list(todo);
});

// テストしたい作業を関数内に隔離することで見やすくした
function test_list(todo_mod) {
	// todo と list のテスト
	todo_mod.todo('ノートを買う');
	todo_mod.todo('鉛筆を買う');
	assert.deepEqual(todo_mod.list(), ['ノートを買う', '鉛筆を買う']);

	// done と donelist のテスト
	todo_mod.done('鉛筆を買う');
	assert.deepEqual(todo_mod.list(), ['ノートを買う']);
	assert.deepEqual(todo_mod.donelist(), ['鉛筆を買う']);

	// del のテスト
	todo_mod.del('ノートを買う');
	todo_mod.del('鉛筆を買う');
	assert.deepEqual(todo_mod.list(), []);
	assert.deepEqual(todo_mod.donelist(), []);

	console.log('テストが正常に完了しました');
}