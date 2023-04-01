//! Functions

//? Function declaration
// function printMyName() {
//   console.log("My name is Egle");
// }

// printMyName();

//? Function with inner variables;
// function printMyName() {
//   const myName = "Egle";
//   console.log(`My name is ${myName}`);
// }

// printMyName();

// jeigu console.log(myName) padaryciau, mes error,
// nes kiti negali i f-ijos vidu paziuret

//? Functions with outer (global) variables;
//? retas variantas, nera gera praktika. Geriau su parametrais

// const myName = "Egle";

// function printMyName() {
//   console.log(`My name is ${myName}`);
// }

// printMyName();

//? Functions with parameters;
//? jeigu f-ijai reikia duomenu is isores, tuomet stengiames su parametrais

// const myName = "Egle";

// function printMyName(myFirstName) {
//   console.log(`My name is ${myFirstName}`);
// }

// printMyName(myName);

//? Function with default parameters
// const myName = "Egle";

// function printMyName(myFirstName = "Egle", lastName = "Sviderskyte") {
//   console.log(`My name is ${myFirstName} ${lastName}`);
// }

// printMyName(undefined, "Jonaitis");
//tuomet nenaudos numatytosios reiksmes, naudos tai, ka gavo - Jonas pirmu pavyzdziu

//? Functions return statements
// function sum(a, b) {
//   return a + b;
// }

// // const summa = sum(2, 3);
// // console.log(summa);
// //return kaip "break", atlieka savo darba ir grazina rezultata

// //arba trumpiau vietoj 58-59 eilutes:
// console.log(sum(2, 3));

//? Function usage example
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// let age = prompt("How old are you?", 18);

// if (checkAge(age)) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

//? 20 sk. uzduotis su dviem variantais
// function checkAge(age) {
//   //? variantas su ternary
//   age >= 18 ? true : confirm("Do you have permission from your parents?");
// }

// //? variantas su OR operatorium (grazina viena is operandu, o ne true/false)
// function checkAge(age) {
//   return age > 18 || confirm("Do you have permission from your parents?");
// }

// let age = prompt("How old are you?", 18);
// if (checkAge(age)) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

//? Function expression. Cia pati f-ija issaugota i kintamaji

const printMyName = function () {
  const myName = "Egle";
  console.log(`My name is ${myName}`);
};

printMyName();

//? Arrow function
//function declaration - regular function. Kai su function keywordu. P.S. return grazins tik viena dalyka, negalim dar ir pvz., stringa idet 'labas'
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));

//function expression (saugom i kintamaji) - arrow function (aprasymo tipas)
const sum2 = (a) => a * a;

console.log(sum2(2));
//jeigu vienas parametras, tada galima nerasyti skliausteliu (kazkuris extension uzdeda juos vis tiek)
//jeigu po rodykles mes turim tik viena sakini/statementa, tai galim {} nerasyti ir return zodzio irgi nereikia rasyti
// buvo pries tai taip:
// const sum2 = a => {
//     return a * a;
//   };

//   console.log(sum2(2));
