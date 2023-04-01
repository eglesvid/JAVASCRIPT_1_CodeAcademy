//! Arrays ant array methods 1
//? basics
let value;

const arrayOne = ["first item", 12, [1, 2, 3], { name: "vardas" }];
const arrayTwo = new Array("string2", 12);

value = arrayOne[2][1]; // galiu pasiimti masyvo masyva: value = arrayOne[2][1];
value = arrayOne[3].name; // objekto name paememe

value = arrayOne.length; // nusiskaitom savybes reiksme

//? Basic Array methods - changes original array //f-ijos, kurias mes galim daryt ant objektu
//pop - ISMETA ismete paskutini elementa is masyvo, pakeicia og masyva ir grazino mums jo reiksme
value = arrayOne.pop();

//push - PRIDEDA prides i masyvo gala elementa; grazina masyvo ilgi. Dazniausiai sutinkamas
value = arrayOne.push("added string");

//shift - analogas pop, tik ismes pirma elementa is masyvo
value = arrayOne.shift();

//unshift - analogas push
value = arrayOne.unshift("added string to the start");

// console.log(arrayOne);
// console.log(value);

//? pass by value - primitive data types - vienam kintamajam priskiriam kito kintamojo reiksme
const number = 15;

let number2 = number;
number2 = 11;
// console.log(number, number2);

//? pass by reference - arrays, objects; priskiria ne value, bet nuoroda i kuria vieta yra sitie duomenys. arrA saugo nuoroda i tuos duomenis. As prisiskiriu nuoroda/adresa i tuos duomenis. Sukuria nauja nuoroda i duomenis tuos pacius.
const arrA = [5, 10, 15];
const arrB = arrA;
arrB[0] = 1;
// console.log(arrA, arrB);

//? Looping through Array

//for loop

for (let i = 0; i < arrayOne.length; i++) {
  //   console.log(arrayOne[i]);
}

//for...of loop - suks per nurodyta array, ir kai suks per elementus kiekvienas elementas vadinsis arrayItem
for (const arrayItem of arrayOne) {
  console.log(arrayItem);
}

//?matrix of arrays
const arrMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

value = arrMatrix[2][1];

// console.log(value);

//? Other methods
//? Splice method - modifies original array - pakeicia musu array, su kuriuo mes dirbam. KEICIA ARRAY

const spliceArray = ["I", "love", "JS", 5];

// value = spliceArray.splice(1, 1);
// value = spliceArray.splice(0, 2, "New love");

// console.log(spliceArray);
// console.log(value);

//? Slice - does not modify original array, gets copy of part of array or all of it
//? pasidarom duplikata, og array nesikeicia. Paskutinis indeksas neisiskaiciuoja. NEKEICIA ARRAY

// value = spliceArray.slice(1, 3);
// value = spliceArray.slice(-2);
// one more way to copy array
// value = spliceArray.slice(); //realiai pasikopijuojam masyva
// console.log(spliceArray);
// console.log(value);

//? concat - paima masyva ir prijungia kito masyvo duomenis ir gaunam nauja masyva
const concatArray = spliceArray.concat(arrayOne, arrayTwo);

// console.log(spliceArray);
// console.log(concatArray);
// console.log(value);

//? spread operator - gali pakeisti concat'a. trys taskiukai "isbarsto" elementus
//alternative to concat method
const concatWithSpreadOperator = [...spliceArray, ...arrayOne, ...arrayTwo];

//one more way to copy array
const arrCopied = [...spliceArray];

// console.log(concatWithSpreadOperator);
// console.log(arrCopied);

//? index of, lastIndexOf, includes methods
// value = arrayOne.indexOf(12);
// value = arrayOne.lastIndexOf(12);
// value = arrayOne.includes(12);

console.log(value);
console.log(arrayOne);

//! Callback function - f-ijos, kurias paduodam i parametra

// document.addEventListener("click", handleClick) // f-ija, kuria mes pasiduodam i f-ija

function getName() {
  const name = prompt("Enter your name");
  return name;
}
function getLastName() {
  const lastName = prompt("Enter your lastname");
  return lastName;
}

function displayName(nameFn) {
  console.log("Call me " + nameFn());
}

// displayName(getName);
// displayName(getLastName);

//? side note - recursive function - f-ijos, kurios kviecia pacios save

function recursiveCountDown(number) {
  console.log(number);
  number--;

  if (number > 0) {
    recursiveCountDown(number);
  }
}

recursiveCountDown(10);
