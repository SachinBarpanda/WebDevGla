// let firstname = 'nikhil'
// undefined
// fir
// VM98:1 Uncaught ReferenceError: fir is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM98:1
// firstname
// 'nikhil'
// let nikhilKaFirstName = 'nikhil'
// undefined
// nikhilKaFirstName
// 'nikhil'
// let deepak_first_name = "deepak"
// undefined
// deepak_first_name
// 'deepak'
// let harindra-ka-firstname = "harindra"
// VM396:1 Uncaught SyntaxError: Unexpected token '-'
// let harindra_ka_firstname = "harindra"
// undefined
// harindra_ka_firstname
// 'harindra'
// let harindra_ka_firstname = 'harindra's'
// VM472:1 Uncaught SyntaxError: Unexpected identifier 's'
// let harindra_ka_firstname = 'harindra\'s'
// undefined
// harindra_ka_firstname
// "harindra's"

// let harindra_ka_firstname = 'harindra\ns'
// console.log(harindra_ka_firstname);

let firstname = 'deepak'
// undefined
let lastname = 'Sharma'
// undefined
// console.log
// ƒ log() { [native code] }
// console.log(first
// VM222:1 Uncaught SyntaxError: missing ) after argument list
// console.log(firstname+' '+lastname)
// VM289:1 deepak Sharma

let name = `my name is ${firstname} ${lastname}.`
console.log(name);

