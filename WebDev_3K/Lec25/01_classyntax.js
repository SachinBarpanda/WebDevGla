class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return `My name is ${this.name}`;
    }
}

class Student extends Person{
    constructor(name,age,roll){
        super(name,age);
        this.roll = roll;
    }
}

// let prs1 = new Person();
let prs1 = new Person('Rahul',21);
// console.log(prs1.name);
// let newName = prs1.getName();
// console.log(newName);
let std1 = new Student('Rahul',22,54);
console.log(std1.getName());
console.log(std1.roll);