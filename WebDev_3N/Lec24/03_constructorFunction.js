
function Users(){
    this.newUser = "Hulk";
}
function Users(val){
    this.newUser = val;
}

// let users = new Users();
let users2 = new Users("Iron Man");
// console.log(users);
console.log(users2.newUser);


