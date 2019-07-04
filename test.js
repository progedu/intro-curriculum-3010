'use strict';
const todo = require('./index.js');
const assert = require('chai').assert
 

const fs = require('fs');  
try{
    fs.unlink('./tasks.json', err => {
        // todo と list のテスト
        todo.todo('ノートを買う');
        todo.todo('鉛筆を買う');
        assert.sameMembers(todo.list(), ['ノートを買う', '鉛筆を買う']);
        
        // done と donelist のテスト
        todo.done('鉛筆を買う');
        assert.sameMembers(todo.list(), ['ノートを買う']);
        assert.sameMembers(todo.donelist(), ['鉛筆を買う']);
        
        // del のテスト
        todo.del('ノートを買う');
        todo.del('鉛筆を買う');
        assert.sameMembers(todo.list(), []);
        assert.sameMembers(todo.donelist(), []);
        
        console.log('テストが正常に完了しました');
    
    
    })    

}catch (err) {
    console.log(err);
}
