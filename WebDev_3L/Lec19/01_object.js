let persons = {
    name1:'Harshit',
    name2:'Rohit',
    age:18,
    favColor:'Black'
}

// console.log(persons.name1);
// console.log(persons.name2);
// console.log(persons['age']);

let marks = {
    evs : 100,
    maths : 80,
    physics : 60,
    eng : 90,
    history :57,
    total : function(){
        // console.log(100+80);
        return (this.evs+this.eng+this.history);
    }
}

// marks.total();
console.log(marks.total());