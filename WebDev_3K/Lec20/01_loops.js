let n = 5;
let i = 0;
// while(i<n){
//     console.log(`${i} is the number`);//``-->backtick
//     i++;
// }

let arrM = ['a','b',1,2,3,true,undefined];
for(let items of arrM){
    console.log(`${items} of arr`);
}

let person = {
    name:'Sandhya',
    roll : 56,
    favColor: 'black'
}

for(let items in person){
    console.log(`${items} of person is ${person[items]}`);
}


