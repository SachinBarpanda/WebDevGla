let obj = {
	title : "buy something",
	fun : function(){
		return `buy this ${this.title}`;
	}
};

console.log(obj.fun());
// console.log(obj.marvel());
console.log(obj.toString());

// arr.__proto__
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()fla...////[[Prototype]]: Object
// arr.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// arr.__proto__.__proto__.__proto__
// null