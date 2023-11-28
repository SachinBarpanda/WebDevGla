function fn(){
    console.log(this);
}
// fn();

let obj={
    a : 20,
    fn : function(){
        console.log(this);
    }
}
// obj.fn();
let a = obj.fn;
// a();


//Constructor Function 
function Users(val){
    console.log(this);
}

// let users = new Users();
let users2 = new Users("Iron Man");

// Call Bind Apply

let obj4={
    a : 20,
    fn : function(a,b,c){
        console.log(this,a,b,c);
    }
}

let obj5 = {
    b : 30
}

// obj.fn();
// let a1 = obj4.fn.call(obj5,3,4,10);
// let a1 = obj4.fn.apply(obj5,[3,4,10]);

let obj6={
    a : 20,
    fn : function(){
        console.log(this);
    }
}
// obj.fn();
let a2 = obj6.fn.bind(obj6);
a2();

