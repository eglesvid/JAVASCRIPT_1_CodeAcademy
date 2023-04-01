//todo 0: Write named function sum(a, b) and invoke function with test arguments;

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 3));

//todo 1: Write arrow function which would do the same as above. Test it;

// const sumArrow = (a, b) => a + b; //nebereik return rasyt, turint viena statement'a
// console.log(sumArrow(5, 7));

//todo 2: Write setTimeout with function to log hello after 5s;

// setTimeout(() => console.log("hello"), 5000);

//todo 3: Write setInterval with function to count times the 2s elapsed;

// let number = 0;
// setInterval(times, 2000);

// function times() {
//   console.log(++number);
// }

//todo 4: Write a function that returns true if a string is empty and false otherwise;

// let string = "";

// function isEmpty(string) {
//   if (string === "") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEmpty(string)); // i skliaustelius paduodam duomenis, kuriuos tikrinsim

//arrow
const isEmpty = (string) => (String(string) === "" ? true : false);
const isEmpty2 = (string) => !string; //ivyksta paneigimas ir pavertimas i boolean

const response = isEmpty("");
console.log(response);

console.log(isEmpty2("labas"));
