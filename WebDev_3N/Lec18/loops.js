// while 
// let i = 1;
// let n = 5;
// while(i<n){
//     console.log("Hi"+i);
//     i++;
// }

// 

let marks = {
    evs : 100,
    maths : 82,
    hindi : 90,
    eng : 78,
    total : function(){
        // console.log(100+82+90+78);
        // return (100+82+90+78);
        return (this.evs+this.maths);
    } 
}

// for(let item in marks){
//     console.log(`Marks in ${item} -> ${marks[item]}`);
// }

let arr = ['a','b','c',23,[1,2,3],true];
for(let item of arr){
    console.log(item);
}