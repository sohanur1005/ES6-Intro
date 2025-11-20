// 

const getAge=(person)=>person.age;
const student={name:'sohanur',age:24}
const age=getAge(student)
console.log(age)


const getThird=numbers=>numbers[2];
const arr=[1,2,3,4,5,6,7];
const third=getThird(arr)
console.log(third)

const double=number=>number*2;
const result=double(5);
console.log(result)

// no parameter

const getPI=()=>Math.PI
console.log(getPI())