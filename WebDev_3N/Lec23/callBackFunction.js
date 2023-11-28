function calculate(a,b,funSum){
    return funSum(a,b);
}

const sum = calculate(2,3,function(num1,num2){
    return num1+num2;
});

console.log(sum);


