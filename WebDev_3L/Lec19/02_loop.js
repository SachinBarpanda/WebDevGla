let n = 5;
let i = 0;
// while(i<n){
//     console.log(i);
//     i++;
// }
// for(;i<n;i++){
//     console.log(i);
// }

let arr = ["Rahul", "Deepak",[1,2,4], "Harendra"];

// for(let item of arr){
//     console.log(item);
// }

let persons = {
    name1:'Harshit',
    name2:'Rohit',
    age:18,
    favColor:'Black'
}

for(let items in persons){
    console.log(`The ${items} of this peron is ${persons[items]}`);//
}