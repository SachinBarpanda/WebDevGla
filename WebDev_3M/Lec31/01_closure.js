function anything(){
	let name = 'x';
	function printName(){
		 console.log(name);
	}
	return printName();
}
let a = anything();

// a = printName(){
//     console.log(name);
// };