class Person{
    constructor(a,b,c){
        this.a = a;
        console.log(a,b,c);
    }
    getName(){
        return this.a;
    }
}

class Character extends Person{
    constructor(a,b,c,d){
        super(a,b,c);
        this.d = d;
    }
}

let prs = new Person("RockStar",2,3);
let chr = new Character("Esports", 1,2,'fifa');
console.log(prs.getName());
console.log(chr.d);