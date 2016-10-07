var names = ['maniek','tomek','wojtek','romek'];

// names.forEach( function(name) {
// 	console.log("Name :" +name);
// });

// names.forEach((name) => console.log("Name :" +name));

// var returnMe = (name) => name+ '!';

// console.log(returnMe('maniek'));

// var person = {
// 	name: 'maniek',
// 	greet: function () {
// 		names.forEach(function(name) {
// 			console.log(this.name+ ' says hi '+ name);
// 		});
// 	}
// };

// person.greet();

// var person = {
// 	name: 'maniek',
// 	greet: function () {
// 		names.forEach((name) =>{
// 			console.log(this.name+ ' says hi '+ name);
// 		});
// 	}
// };

// person.greet();

var addStatement = (a,b) => {
	return a+b;
}

console.log(addStatement(4,2));

var addExpression = (a,b) => a+b;

console.log(addExpression(5,5));