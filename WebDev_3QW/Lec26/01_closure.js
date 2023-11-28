function print(){
    let x= 'Joker';
    function name(){
        return (x);
    }
    return name();
}

let a = print();

// a = function name(){
//     console.log(x);
// }
console.log(a);
