//? Parašykite funkciją min(a, b), kuri grąžina mazesni iš dviejųskaičiųa irb. Parašykitekaipfunction declaration iranonymous arrow function būdu.

//function declaration

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(min(1, 5));

//arrow function

const min2 = (a, b) => {
  return Math.min(a, b);
};

console.log(min2(1, 5));

//papildoma info apie Math.random number generatorius
const number = Math.ceil(Math.random() * 23);
console.log(number);
