//node task1.js
//Первое, что пришло в голову - регулярное выражение.
//Не часто с ними сталкиваюсь, пришлось погуглить. Решение к которому пришёл.

let str = 'Hello World!'

regexp = /[a-zA-Z]/gi

let letterCount = str.match(regexp).length

console.log(letterCount);