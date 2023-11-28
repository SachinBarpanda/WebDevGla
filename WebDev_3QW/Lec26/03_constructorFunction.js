function Person(){
    this.name = 'Vrindavan'
}
function Person(age){
    this.age = age;
}

Person.prototype.getName = function(){
    return `Age of city is ${this.age}`
}

let prs1 = new Person(1000000);
// console.log(prs1.age);
// console.log(prs1.name);
console.log(prs1.getName());