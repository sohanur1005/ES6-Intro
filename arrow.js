
// function decleration
/*function add(a,b)
{
    const result=a+b;
    return result;
} */



function add(a,b)
{
    return a+b;
}
const sum=add(10,10)
console.log(sum)

// function expression
const add2=function(a,b)
{
    return a+b;
}

const sum2=add2(10,10)
console.log(sum2)

//arrow function
 const add3=(a,b) => a+b;
 const sum3=add3(10,10);
 console.log(sum3)



