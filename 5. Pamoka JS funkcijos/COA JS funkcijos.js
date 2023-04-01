//? TASK 1.
//? Ne visos funkcijos turi return statement (nors dažniausiai taip yra).
//? Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)

// function alertName(myName) {
//   alert(myName);
// }

// alertName("Egle");

//? TASK 2.
//? Ir ne visos funkcijos turi parametrus - sukurkite funkciją,
//? kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 5) + 1;
// }
// generateRandomNumber();

//? TASK 3.
//? Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę -
//? ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// function getSum(name, lastName) {
//   return name.length + lastName.length;
// }

// getSum("Egle", "Sviderskyte");

//? TASK 4.
//? Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės
//? raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.).
//? Hint: Jums reikės pirma sukurti Array su visomis raidėmis
//? (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.

// const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "Z"];

// function getLetter(_character) {
//   console.log(_character);
// }

// getLetter(letterArray[4]);

//arba ats. is COA

// function getLetterByIndex(index) {
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   console.log(alphabet[index]);
// }
// getLetterByIndex(4);

//? TASK 5.
//? Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator).
//? Operator gali būti "sum", "sub", "div", "multi"
//? (matematinės reikšmės - sudėti, atimti, padalinti, padauginti).
//? n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta
//? matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...).
//? Hint: Reikės funkcijoje naudoti if-else arba switch.

// function sayResult(n1, n2, operator) {
//   switch (operator) {
//     case "sum":
//       return n1 + n2;
//     case "sub":
//       return n1 - n2;
//     case "div":
//       return n1 / n2;
//     case "multi":
//       return n1 * n2;
//   }
// }

// sayResult(5, 1, "sum");

//arba

// function sayResult() {
//   let n1 = prompt("first number");
//   let n2 = prompt("second number");
//   operator = prompt("operator");

//   if (operator === "sum") {
//     let sum = +n1 + +n2;
//     console.log(sum);
//   } else if (operator === "sub") {
//     let sub = n1 - n2;
//     console.log(sub);
//   } else if (operator === "div") {
//     let div = n1 / n2;
//     console.log(div);
//   } else if (operator === "multi") {
//     let multi = n1 * n2;
//     console.log(multi);
//   } else {
//     let unknown = "undefined";
//     console.log(unknown);
//   }
// }

// sayResult();

//? TASK 6.
//? Sukurkite dvi funkcijas: viena grąžina random skaičių
//? nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu.
//? Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function getRandomNumber() {
  number = Math.floor(Math.random() * 10 + 1);
  return number;
}

function getSquareNumber(number) {
  let squareNumber = Math.pow(number, 2);
  console.log(squareNumber);
}

getSquareNumber(getRandomNumber());
