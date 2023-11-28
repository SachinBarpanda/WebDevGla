function a(func2){
    return func2();
}

function b(){
    console.log("Inside of b")
}

a(b);
