// var: no reason to use
// let:allow it to reassign
// const:don`t allow it to reassign

/*TypeError: Assignment to constant variable.
const money=50;
money=60;
console.log(money)*/

let count=10;
count=count+10;
console.log(count)

const a=[5,8,4,2,8,]
a.push(5)
console.log(a)


