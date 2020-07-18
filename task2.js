//node task2.js

//Первое, что подумал, можно найти по querySelector('.foo').children[0] у  - но это не подходит, поскольтку есть разметка до
//Далее, подумал, что можнжно было просто найти все спаны в .foo и сделать children[0] findSpan1 
//либо просто cделать querySelector('.foo').querySelector("span")


let findSpan1  = document.querySelector('.foo').getElementsByTagName("span")[0]
let findSpan2 = document.querySelector('.foo').querySelector("span")


console.log(findSpan1);
console.log(findSpan2);



