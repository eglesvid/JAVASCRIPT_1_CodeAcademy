//? TASK 1
//? Parašyk array su penkiais mėgstamiausiais tavo skaičiais.
//? Su reduce visus juos sudėk ir grąžink vieną skaičių.

const favNum = [2, 4, 8, 12];
const total = favNum.reduce((acc, num) => acc + num, 0);
console.log(total);

//COA ATS:
// const favNumbs = [3, 9, 13, 25, 31];
// console.log(favNumbs.reduce((a, v) => a + v));

//? TASK 2
//? Ne vien skaičius sudėti galime.
//? Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"])
//? ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais
//? (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
console.log(cars.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0));

//? TASK 3
//? Sukurk array su daug skaičių.
//? Grąžink didžiausią skaičių iš array naudojant reduce.

const numbers = [5, 10, 20, 4, 11, 13];
console.log(numbers.reduce((a, v) => (a > v ? a : v)));
