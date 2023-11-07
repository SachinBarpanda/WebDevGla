// let a = 5;
// let i = 0;
// while(i<a){
//     console.log("Hello "+i);
//     i++;
// }

// for(;i<a;i++){
//     console.log("Hello "+i);
    
// }

let arr = ['a','b','c',23,[1,2,3],true];
//for-of
for(let items of arr){
    console.log(items);
}


let marks={
    evs:100,
    maths:70,
    hindi:80,
    Sanskrit: 90,
    a : function(){
        // console.log(100+90);
        // return (100+90);
        return (this.evs+this.maths+this.hindi);
    }
}



for(let items in marks){
    console.log(`Marks scored in ${items} is ${marks[items]}`);//backticks not quotes
}
