class Person{
    constructor(a,b){
        this.a = a;
        this.b = b;
        console.log(`The values are ${a} ${b}`);
    }

    getName(){
        return `The name is ${this.a}`;
    }
}

class Student extends Person{
    constructor(a,b,roll){
        super(a,b);
        this.roll = roll;
    }
}

// let prs = new Person();
let prs = new Person('Iron Man',13);
let std = new Student('Abhisek',13,2);
console.log(prs.getName());
console.log(std.roll);


