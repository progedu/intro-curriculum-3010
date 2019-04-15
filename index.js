'use strict';

// 例外処理
// key にタスクの文字列。value に真偽値(完了しているかどうか)、今回はデフォルトに偽(フォルス)を入れ、未完了にしておく。
let tasks = new Map(); // new Map は連想配列。文字列もキーに出来るとても便利な機能。上書き可能にする為、const から let に変更。
const fs = require('fs'); // fs(ファイルシステムモジュール)を呼び出し、
const fileName = './tasks.json'; // ./tasks.json を使っていくので、そこまでのパスを fileName に入れている。使い回す物は、この様に変数に入れておくと楽。
/**
 * タスクをファイルに保存する
 */
// 同期的にファイルから復元
// ここが例外処理
try {
  const data = fs.readFileSync(fileName, 'utf8'); // data は文字列。fs モジュールの readFileSync で一気に読み込める。第一引数(fileName)、第二引数(文字コード)。
  tasks = new Map(JSON.parse(data)); // data が文字列なので、JSON.parse(data)で json にしてから、new Map に渡すと連想配列に戻る。
} catch (ignore) { // エラーが出てもエラーの変数は使わないので ignore(無視する)としている。
  console.log(fileName + 'から復元できませんでした');
} // try でエラーが発生したら、fileName + 'から復元できませんでした' を console.log に出す。
/**
 * try {
    throw new Error('my error');
} catch (err) {
    console.log(err);
} finally {
    console.log('finally do');
} とすると、try が成功してもしなくても、finally が実行される。
 */
function saveTasks() {
  fs.writeFileSync(fileName, JSON.stringify(Array.from(tasks)), 'utf8'); // writeFile ファイルに書き込む便利な API、Sync なので同期する。どこに？ fileName に。
} // タスクをマップで管理しているので、これを JSONに書き込める形式にして、ファイルに書き込むコード。fileName は上の ./tasks.json。第二引数は実際に書き込む文章。
// tasks が連想配列のマップを使っていて、このままでは使えないので、一旦(Array.from(tasks))で配列に変換している。次から saveTasks()を呼べば、現在の tasks の状態を書き込んでくれる。
/**
* TODOを追加する
* @param {string} task
*/
function todo(task) { // todo 関数を宣言。task(文字列) を受け取る。連想配列名 tasks + セット関数 .set + (キーの値, + 値)
  tasks.set(task, false);
  saveTasks(); // タスクの状態が変わったので、function saveTasks()を呼び出している。
}
/**
* タスクと完了したかどうかが含まれる配列を受け取り、完了したかを返す
* @param {array} taskAndIsDonePair
* 例:['鉛筆を買う', ture]
* @return {boolean} 完了したかどうか
*/
function isDone(taskAndIsDonePair) {
  return taskAndIsDonePair[1]; // 完了していたら真(トゥルー)を返す。
}
/**
* タスクと完了したかどうかが含まれる配列を受け取り、完了していないかを返す
* @param {array} taskAndIsDonePair
* @return {boolean} 完了していないかどうか
*/
function isNotDone(taskAndIsDonePair) { // 完了していなかったら偽(フォルス)を返す。
  return !isDone(taskAndIsDonePair); // ! を付けると、上の動きと逆の動作を行なう。
}
/**
* TODOの一覧の配列を取得する
* @return {array}
*/
function list() { // 未完了のタスクだけを出す。
  return Array.from(tasks) // tasks を配列に変換してから、
      .filter(isNotDone) // .filter でチェックして、未完了だけ取ってきて、
      .map(t => t[0]); // タスク名だけ出力する。
}
/**
* TODOを完了状態にする
* @param {string} task
*/
function done(task) { // done(ダーン)関数。無いタスクは更新できない。
  if (tasks.has(task)) { // タスクを持っているかチェック。
      tasks.set(task, true); // 持ってた時だけ更新する。ここでの tasks は、配列。task は文字列。
      saveTasks();
  }
}
/**
* 完了済みのタスクの一覧の配列を取得する
* @return {array}
*/
function donelist() {
  return Array.from(tasks)
      .filter(isDone)
      .map(t => t[0]);
}
/**
* 項目を削除する
* @param {string} task
*/
function del(task) {
  tasks.delete(task);
  saveTasks();
}
module.exports = { // モジュールエクスポーツに、
  todo: todo, // todo と、
  list: list, // list と、
  done: done, // done と、
  donelist: donelist, // donelist と、
  del: del // del を登録。
}; // 他のファイルからも使える様にする。
