let obj = {
	title : "buy something",
	fun : function(){
		return `buy this ${this.title}`;
	}
};

console.log(obj.fun());
console.log(obj.fun().toString());

// obj.__proto__.__proto__
// null


// String.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


