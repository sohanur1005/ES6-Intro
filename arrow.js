
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
//  multiple parameter
 
 const add4=(n1,n2,n3,n4) => (n1+n2)*(n3+n4);
 const multi=add4(1,2,3,4)
 
 console.log(multi)



