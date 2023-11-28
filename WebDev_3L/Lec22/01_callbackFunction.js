function add(a,b,fun){
    return fun(a,b);
}

let save = add(4,5,function(num1,num2){
    // console.log(num1+num2);
    return (num1+num2);
})

console.log(save);
