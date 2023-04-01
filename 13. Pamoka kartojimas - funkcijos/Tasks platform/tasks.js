//? TASK 1
//? Create a function wasteTime(), which would have a loop and would make 10000000 iterations.
//? In every iteration it would just make dummy operation, e.g. 5 * 95 / 12;
//? Function should return how long it took to run iterations.
//? Tip. Set timestamp (Date.now()) before running function
//? and subtract it at the end of the function from new timestamp.
//? Write function as declaration and as arrow function.
//? praso basically paskaiciuoti per kiek laiko pereina tuos visus loop

// function wasteTime() {
//   const current = Date.now();
//   let amount = 10000000;
//   for (let i = 0; i < amount; i++) {
//     let number = (5 * 95) / 12;
//   }
//   const final = Date.now() - current;
//   console.log(final + "ms");
// }

// wasteTime();

//arrow:

// const wasteTime = () => {
//   const current = Date.now();
//   let amount = 10000000;
//   for (let i = 0; i < amount; i++) {
//     let number = (5 * 95) / 12;
//   }
//   const final = Date.now() - current;
//   console.log(final + "ms");
// };

// wasteTime();

//? TASK 2
//? Write function calculator, which would take 3 parameters:
//? number, operator, number, and would return result of number operator number, e.g. 3, ‘-’,1, should return 2.
//? Set that default operator is ‘+’ if undefined is supplied as operator.
//? Write function as declaration and as arrow function.

// function calc(number, operator, anotherNumber) {
//   if (operator === "-") {
//     console.log(number - anotherNumber);
//   } else {
//     const totalSum = number + anotherNumber;
//     console.log(
//       `There was an undefined operator. In this case you get a sum: ${number} + ${anotherNumber} = ${totalSum}`
//     );
//   }
// }

// calc(6, "*", 2);

//arrow:

// const calc = (number, operator, anotherNumber) => {
//   if (operator === "-") {
//     console.log(number - anotherNumber);
//   } else {
//     const totalSum = number + anotherNumber;
//     console.log(
//       `There was an undefined operator. In this case you get a sum: ${number} + ${anotherNumber} = ${totalSum}`
//     );
//   }
// };

// calc(6, "*", 2);

//? TASK 3.
//? Write IIFE with function declaration and as arrow function,
//? which would print to console immediately after loading JS string with greeting:
//? ‘Hello, today is <Monday>’,
//? where day name would be created depending on today’s weekday name
//? (https://www.w3schools.com/jsref/jsref_obj_date.asp).
//? Function invocation is not allowed.

// (function getGreeting() {
//   const today = new Date().toLocaleString(undefined, { weekday: "long" });
//   console.log(`Hello, today is ${today}`);
// })();

// //arrow:

// (() => {
//   const today2 = new Date().toLocaleString(undefined, { weekday: "long" });
//   console.log(`Hello, today is ${today2}`);
// })();
