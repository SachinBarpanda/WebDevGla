fn =  (a,b)=>{
    console.log("Normal Function",a,b);
}
// fn(3,4);

squareROot = a => a*a ;

console.log(squareROot(4));

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


