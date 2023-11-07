// let Person = {
//     name: "Bhupendra Jogi",
//     age:30,
//     favColor:"Violet"
// }

// console.log(Person.name);
// console.log(Person.age);
// console.log(Person['age']);


let marks = {
    Eng : 100,
    maths : 80,
    automata : 81,
    total : function (){
        // console.log(100+80);
        // return (100+80);
        return (this.Eng+this.maths+this.automata);
    }
}
// marks.total();
console.log(marks.total());

