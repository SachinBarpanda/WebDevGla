fun = ()=>{
    console.log("This is fun");
}

// fun();

let square = a =>  a*a;
// console.log(square(5));


let obj6={
    a : 20,
    obj : {
        fun : function(){
            let fn = ()=>{
                console.log(this);
            }
            fn();
        }
    }
}
// obj.fn();
let a2 = obj6.obj.fun();




