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

// let prs = new Person();
let prs = new Person('Iron Man',13);
console.log(prs.getName());