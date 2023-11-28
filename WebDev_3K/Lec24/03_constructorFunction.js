
function Users(){
    this.newUser = "Hulk";
}
function Users(val){
    this.newUser = val;
}

Users.prototype.getName=function(x){
    return `Name is ${this.x = x}`;
}

// let users = new Users();
let users2 = new Users("Iron Man");
// console.log(users);
// console.log(users2.newUser);
console.log(users2.getName("Iron Man"));

