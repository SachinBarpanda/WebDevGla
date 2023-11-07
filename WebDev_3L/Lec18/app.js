

// let marks = 91;
let marks = prompt("Enter your marks");
let marksNum = Number.parseInt(marks);
console.log(typeof marksNum);
if(marks < 90 && marks>80){
    console.log("A grade");
}else if(marks>60){
    console.log("B grade");
}else{
    console.log("C grade");
}