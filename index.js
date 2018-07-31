'use strict';

// key: タスクの文字列 value: 完了しているかどうかの真偽値
let tasks = new Map();

const fs = require('fs');
const fileName = './tasks.json'

// 同期的にファイルから復元
try {
    const data = fs.readFileSync(fileName, 'utf8');
    tasks = new Map(JSON.parse(data));
} catch (ignore) {
    console.log(fileName + 'から復元できませんでした');
}

/** 
 * タスクをファイルに保存する 
 */
function saveTasks() {
    fs.writeFileSync(fileName, JSON.stringify(Array.from(tasks)), 'utf8');
}

function todo(task) {
    tasks.set(task, false);
    saveTasks();
}

function isDone(tasksAndIsDonePair) {
    return tasksAndIsDonePair[1];
}

function isNotDone(taskAndIsDonePair) {
    return !isDone(taskAndIsDonePair);
}

function list() {
    return Array.from(tasks)
        .filter(isNotDone)
        .map(t => t[0]);
}

function done(task) {
    if (tasks.has(task)) {
        tasks.set(task, true);
        saveTasks();
    }
}

function donelist() {
    return Array.from(tasks)
        .filter(isDone)
        .map(t => t[0]);
}

function del(task) {
    tasks.delete(task);
    saveTasks();
}

module.exports = {
    todo: todo,
    list: list,
    done: done,
    donelist: donelist,
    del: del
};