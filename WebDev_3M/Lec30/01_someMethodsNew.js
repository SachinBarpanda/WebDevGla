let arr = [11,111,2,3,4,'a','b','c'];

arr.forEach(function(items){
    // console.log(items);
})

let saveName = arr.map(function(item){
    return item;
})

let filtered = arr.filter(function(item){
    // if(item%2==0){
    //     return true;
    // }else{
    //     return false;
    // }
    return item%2!=0;
})
// console.log(filtered);
// console.log(saveName);

let sortedArr = arr.sort(function(a,b){
    // return a-b;
    return b-a;
});
console.log(sortedArr);
