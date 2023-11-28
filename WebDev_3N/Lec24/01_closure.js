function anything(){
	let name = "x";
	function print(){
		 console.log(name);
	}
	return print();
}

let a = anything();
// a = function print(){
//     console.log(name);
// }
console.log(a);
