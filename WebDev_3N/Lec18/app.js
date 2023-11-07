// let marks = 92;
let marks = prompt("Enter your marks");

console.log(typeof marks);
marks = Number.parseInt(marks);
console.log(typeof marks);


if(marks>81 && marks<91){
    console.log("Grade A");
}else if(marks>60){
    console.log("Grade B");
}
else{
    console.log("Grade C");
}