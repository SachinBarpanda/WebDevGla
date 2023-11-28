let arr = ['a','b','c','d','e',12,22];
arr.forEach(function(item){
    // console.log(item);
})

// let newArray = arr.map(function(item){
//     return item;
// })
// console.log(newArray);
let arr2 = [3,6,9,10,11,12];
let newArray = arr2.filter(function(item){
    // if(item%3==0){
    //     return true;
    // }else{
    //     return false;
    // }
    return item%3==0;
})
// console.log(newArray);

let sortedArr = arr2.sort(function(a,b){
    return a-b;
    // return b-a ;
});

console.log(sortedArr);
