function fn(){
    console.log(this);
}
// fn();

let obj = {
    a : 20,
    fn :function (){
        console.log(this);
    }   
}
let a = obj.fn;
// a();

// Constructor Function
function Person(a,b){
    this.a = a;
    this.b = b;
    console.log(this);
}


// let prs = new Person();
// let prs = new Person(42,54);

// call bind apply



let obj4 = {
    a : 20,
    fn :function (a,b){
        console.log(this,a,b);
    }   
}

let obj5 = {
    b : 50
}

// obj4.fn.call(obj5,4,5);
// obj4.fn.apply(obj5,[4,5],[5,6]);


let obj1 = {
    a : 20,
    fn :function (){
        console.log(this);
    }   
}
let a1 = obj1.fn.bind(obj5);
a1();

