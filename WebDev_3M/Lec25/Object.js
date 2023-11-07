let Student = {
    name:'Thor',
    age:34,
    favColor :'black'
}

// console.log(Student.name);
// console.log(Student.age);
// console.log(Student['name']);

let marks={
    evs:100,
    maths:70,
    hindi:80,
    Sanskrit: 90,
    a : function(){
        // console.log(100+90);
        // return (100+90);
        return (this.evs+this.maths+this.hindi);
    }
}
// marks.a();
console.log(marks.a());