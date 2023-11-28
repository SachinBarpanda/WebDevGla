
function Person(a,b){
    this.a = a;
    this.b = b;
    console.log("THis is a person",a,b);
}

Person.prototype.getA= function() {
    return this.a;
}

// let prs = new Person();
let prs = new Person(42,54);
console.log(prs.getA());

