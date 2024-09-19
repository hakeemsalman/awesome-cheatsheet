console.log('-----Copy variables------');
console.log();
console.log('String is assigned one variable then variable is assigned to another variable');
let user = 'Salman';
let userCopy = user;
console.log('assigned variables are same?--> ',user === userCopy);

console.log();
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log();

console.log('Same string but with different variables');
let user2 = 'Salman';
let userCopy2 = 'Salman';
console.log('assigned variables are same?--> ',user2 === userCopy2);

console.log();
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log();

// ---------------------------------------------

let person = {name: 'Salman'}
let personCopy = person;
console.log('Same objects are copied to another variable');
console.log('same? --> ', person === personCopy);

// ------------------------------------------
console.log();

let person1 = {name: 'Salman'}
let person2 = {name: 'Salman'}
console.log('different objects but properties are same');
console.log('same? --> ', person1 === person2);

console.log();

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
//------------------------------------------
console.log();

let age = 26;
let ageCopy = age;
console.log('a number is copied to another variable');
console.log('same? --> ', age === ageCopy);

console.log();

let age1 = 26;
let age2 = 26;
console.log('different varaibles but same numbers values');
console.log('same? --> ', age1 === age2);

console.log();

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

//------------------------------------------

console.log();

let user3 = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log(this.name)
}

// use the same function in two objects
user3.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user3.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

// admin['f']();


console.log();
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log();







