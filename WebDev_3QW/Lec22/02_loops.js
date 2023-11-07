let n = 5;
// let i = 0;
// while(i<n){
//     console.log("Hello World");
//     i++;
// }

// for(let i = 0 ; i<n ; ){
//     console.log("Hello World");
//     i++;
// }

let arr = [1,2,3,'a','b','c',undefined,null,true];

let s = "";
for(let items of arr){
    // console.log(items);//for multiple lines
    s += items + " "; // for single line output
}
// console.log(s);

let Person = {
    name: "Bhupendra Jogi",
    age:30,
    favColor:"Violet"
}

for(let items in Person){
    console.log(`Person's ${items} is ${Person[items]}`);// `` and  ''
}