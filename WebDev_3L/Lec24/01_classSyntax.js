class Vegetable{
    constructor(name,days){
        this.name = name;
        this.days = days;
    }
    getName(){
        return `Naam is ${this.name}`
    }
}

class Aloo extends Vegetable{
    constructor(name,days,injection){
        super(name,days);
        this.injection = injection;
    }

    getStarch(){
        return `Amount of starch is : ${this.injection*100} %`; 
    }
}

let veg = new Vegetable('Kaddu',2);
let veg1 = new Vegetable('Baigan',2);
// console.log(veg.name);
// console.log(veg.days);
// console.log(veg1.getName());

let aloo = new Aloo('sugarFree Aloo',6,4.5);
// console.log(aloo.getName());
console.log(aloo.getStarch());



