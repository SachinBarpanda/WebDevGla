fn = (a)=>{
    console.log("This is a keyword");
}
// fn();

let square = a => a*a;

// console.log(square(5));


// let obj1 = {
//     a : 20,
//     fn : ()=>{
//         console.log(this);
//     }   
// }

// obj1.fn();


let obj1 = {
    a : 20,
    obj : {
        fn: function(){
                let a = ()=>{
                    console.log(this);
                }
            a();
        }
    }   
}
obj1.obj.fn();