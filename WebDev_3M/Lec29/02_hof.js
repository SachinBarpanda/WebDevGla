function a(x,y,arg1){
    return arg1(x,y);
}
function b(x,y){
    // console.log("Inside b");
    console.log(x+y)
}

a(2,3,b);