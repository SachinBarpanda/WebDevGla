function fun1(func2pass){
    return func2pass();
}

function fun2(){
    console.log("Inside fun2")
}
// function fun1(str){
//     function fun2(){
//         console.log(`${str}`)
//     }
//     return fun2();
// }

// console.log(fun1('Iron Dome'));

console.log(fun1(fun2));