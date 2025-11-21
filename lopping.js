 const glass={name:'glass',
    color:'golden',
    price:10,
    isCleaned:true
};

/*for of do  not work  in method  only work in number,array,string
for(const key of glass)
{
    console.log(key)
} */

    // use for in
    for(const key in glass)
    {
        const value=glass[key]
        console.log(key,value)
    }