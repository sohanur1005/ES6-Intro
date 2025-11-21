const glass={name:'glass',
    color:'golden',
    price:10,
    isCleaned:true
};
console.log( glass)
// delete a object
delete glass.isCleaned;
console.log(glass)
// show object prope rty/keys name
const keys=Object.keys(glass)
console.log(keys)

// show keys values
const values=Object.values(glass)
console.log(values)