
// let fn = ()=>{
//     console.log("this is a function");
// }
// fn();

// let sq1 = a => console.log(a*a);
// console.log(sq1(4));
// sq1(5);


// this is arrow

let obj = {
    obj2 : {
        a : 20,
        fn:function(){
            fun = ()=>{
                console.log(this);
            }
            fun();
            
        }
    }
}
obj.obj2.fn();


