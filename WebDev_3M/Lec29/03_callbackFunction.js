function operation(a,b,fun1){
    return fun1(a,b);
}

const operation_Ka_Value = operation(3,5,function(num1,num2){
    // console.log(num1+num2);
    return (num1+num2);
})

console.log(operation_Ka_Value);
