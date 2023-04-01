//!Type conversions

//? To Number
// const age = prompt("Enter age");
// console.log(typeof age);

// const ageAsNumber = Number(age);
// console.log(typeof ageAsNumber);

console.log(Number("a"));

console.log(parseFloat("2.22"));
console.log(parseFloat("2.22ashadkhka"));
console.log(parseFloat("akjshka2.22"));

console.log(parseInt("2.22"));
console.log(parseInt("true"));

// const age = +prompt("Enter age");

// // const ageAsNumber = +age;
// console.log(typeof age);

//? To String
const temperature = 5;
console.log(typeof temperature);
console.log(typeof String(temperature));
// console.log(typeof temperature.toString());

//? Numbers and strings from Booleans
console.log(typeof String(true));
console.log(typeof Number(true));

//? Automatic conversions
console.log("3" + 4);
console.log("3" - 4);
console.log("3" - true);
console.log(3 + false);

console.log("Marijus" + " Romanovas");
const lastName = "Romanovas";
console.log(`Marijus ${lastName}`);

//!Operators
//? Assignment operators

const a = 5;

let b = 2;
b += 5;
//the same as above b = b + 5;
console.log(b);

b -= 2;
console.log(b);

b *= 2;
b /= 2;

//? Comparison operators

console.log(1 == "1");
console.log(1 === "1");
console.log(1 !== "1");
console.log(1 > 2);
console.log(1 >= "1");

console.log("C" > "A");

//? Increment/decrement operators

let number = 1;
// number++;
// console.log(number);
number--;
console.log(number);

//? Logical operators

console.log(true && true && true);
console.log(false || false);
console.log(!!true);

console.log(3 == 4);
