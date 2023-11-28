let arr = [7,13,11,4,2,8,12,71,72,76];

arr.forEach(function(item){
    // console.log(item);
})

let itemAddReact = arr.map(function(item){
    return item;
})

let filterAdd = arr.filter(function(item){
    // if(item%2!=0){
    //     return true;
    // }else{
    //     return false;
    // }
    return item%2!=0;
})

// console.log(itemAddReact);
// console.log(filterAdd);

let sortAdd = arr.sort(function(a,b){
    // return a-b;
    return b-a;
});
console.log(sortAdd);



