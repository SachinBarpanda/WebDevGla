function fun(){
    console.log(this);
}
// fun();

let obj = {
    a : 20,
    fn : function(){
        console.log(this);
    }
}
// obj.fn();
// let a = obj.fn;
// a();

function Person(age){
    console.log(this);
}

// let prs1 = new Person(1000000);

// call bind apply

let obj4 = {
    a : 20,
    fn : function(a,b){
        console.log(this,a,b);
    }
}
let obj5 = {
    b : 21
}

// obj4.fn.call(obj5,3,4);
// obj4.fn.call(obj5,[3,4]);

let obj6 = {
    a : 20,
    fn : function(){
        console.log(this);
    }
}
// obj.fn();
let a1 = obj6.fn.bind(obj5);
a1();


