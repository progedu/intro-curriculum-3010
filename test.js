'use strict';
const assert = require('assert');
const fs = module.require('fs');

fs.unlink('./task.json', (err) =>{
	const todo = require('./index.js');

	//todo list テスト
	todo.todo('ノートを買う');
	todo.todo('鉛筆を買う');
	assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

	//done donelist test
	todo.done('鉛筆を買う');
	assert.deepEqual(todo.list(), ['ノートを買う']);
	assert.deepEqual(todo.donelist(), ['鉛筆を買う']);

	//del test
	todo.del('ノートを買う');
	todo.del('鉛筆を買う');
	assert.deepEqual(todo.list(), []);
	assert.deepEqual(todo.donelist(), []);

	console.log('テストが正常に完了しました');
});
