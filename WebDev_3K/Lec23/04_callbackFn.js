function calculate(a,b, process){
    process(a,b);
}

const sum  = calculate(2,3, function(num1,num2){
    num1+num2;
});

console.log(sum);