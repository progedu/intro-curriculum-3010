'use strict'

// テスト用モジュール呼び出し
const assert = require('assert')
// テスト時は永続化されているjsonを削除
const fs = require('fs')
fs.unlink('./tasks.json', err => {
  // モジュール呼び出し
  const todo = require('./index.js')

  // todo と list のテスト
  todo.todo('おつかい')
  todo.todo('部屋掃除')
  todo.list()
  // 与えられた配列の中身まで比較
  assert.deepEqual(todo.list(), ['おつかい', '部屋掃除'])

  //done と doneList のテスト
  todo.done('おつかい')
  todo.donelist()
  assert.deepEqual(todo.list(), ['部屋掃除'])
  assert.deepEqual(todo.donelist(), ['おつかい'])

  // del のテスト
  todo.del('部屋掃除')
  todo.del('おつかい')
  assert.deepEqual(todo.list(), [])
  assert.deepEqual(todo.donelist(), [])

  console.log('テストが正常に完了しました')
})
