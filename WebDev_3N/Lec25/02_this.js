function fn(){
    console.log(this);
}
// fn();

let obj = {
    a : 20,
    fn1 : function(){
        console.log(this);
    }
}
let a = obj.fn1;
// a();
//constructor function 

function Users(val){
    this.newUser = val;
    console.log(this);
}

// let users = new Users();
// let users2 = new Users("Iron Man");

let obj3 = {
    a : 20,
    fn:function(a,b,c){
        console.log(this,a,b,c);
    }
}
let obj4 = {
    b : 50
}

// obj3.fn.call(obj4,3,4,5);
// obj3.fn.apply(obj4,[3,4,5]);

let obj6 = {
    a : 20,
    fn1 : function(){
        console.log(this);
    }
}
// let a1 = obj6.fn1.bind(obj6);
let a1 = obj6.fn1.bind(obj4);
a1();


