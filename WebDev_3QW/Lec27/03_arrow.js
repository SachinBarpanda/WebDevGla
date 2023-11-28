
let fn = (a,b)=>{
    // console.log("hi"+a+b);
    console.log(a+b+"hi");
}

// fn(4,5);

let square = a => a*a;
// console.log(square(4));


// let obj = {
//     a : 20,
//     fn : ()=>{        
//         console.log(this);
//     }
// }

// obj.fn();

let obj = {
    a : 20,
    objInside : function(){
        let ab = ()=>{
            console.log(this);
        }
        ab();
    }
}

obj.objInside();
