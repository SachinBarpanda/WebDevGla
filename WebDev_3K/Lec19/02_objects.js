let person = {
    name:'Sandhya',
    roll : 56,
    favColor: 'black'
}

// console.log(person.name);
// console.log(person.roll);
// console.log(person['roll']);

let marks = {
    evs : 50,
    eng : 80,
    daa : 90,
    total : function(){
        // console.log(50+80);
        // return (50+80);
        return (this.evs+this.daa);
    }
}
// marks.total();
console.log(marks.total());