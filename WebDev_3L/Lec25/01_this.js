//1.method invocation

let obj = {
    a : 20,
    fun: function(){
        console.log(this);
    }
}
// obj.fun();
// let a = obj.fun;
// a();


// 2. function invocation
function fun1(){
    console.log(this);
}
// fun1();

// 3.constructor mein this

function Obj2(){
    console.log(this);
}
let newObj = new Obj2();
// newObj;


// Call Bind Apply

let obj4 = {
    a:20,
    fun2: function(a,b,c){
        console.log(this,a,b,c);
    }
}

let obj5 = {
    b:50
}

// obj4.fun2.call(obj5,3,4,5);
// obj4.fun2.apply(obj5,[3,4,5]);

// let newFun = obj4.fun2.bind(obj4,2,34,5);
let newFun = obj4.fun2.bind(obj5);
// let newFun = obj4.fun2;
newFun();






