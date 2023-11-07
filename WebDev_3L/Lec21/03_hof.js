function a(c){
    console.log(c);
}
function b(){
    console.log("Hello Iron Man")
}

// a(b());

function firstStep(){
    function secondStep(){
        console.log("In second step ");
    }
    return secondStep();
}
console.log(firstStep());