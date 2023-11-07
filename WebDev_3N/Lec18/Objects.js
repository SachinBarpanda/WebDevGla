let person= {
    name : "Boby",
    age : 21,
    favColor : 'black'
}

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person['age']);

let marks = {
    evs : 100,
    maths : 82,
    hindi : 90,
    eng : 78,
    total : function(){
        // console.log(100+82+90+78);
        // return (100+82+90+78);
        return (this.evs+this.maths);
    } 
}

console.log(marks.total());