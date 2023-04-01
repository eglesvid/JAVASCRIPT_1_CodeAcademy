//? TASK 1.
//? Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą
//? (atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo
//? skaičiuką dažniausiai, vietoj to, kad išmestų kiekvienoje eilutėje).

// for (let myName = 0; myName < 10; myName++) {
//   console.log("Egle");
// }

//? TASK 2.
//? Pakoreguok pirmą pratimą, kad tiek vardas,
//? tiek kiek kartų kartos - būtų kintamieji.

// const myName = "Egle";
// const count = 10;
// for (let i = 0; i < count; i++) {
//   console.log(myName);
// }

//? TASK 3.
//? Prie savo vardo atspaudink ir 'i' raidę,
//? t.y. kelintas ciklas yra (pvz.: "0. Petras", "1. Petras", "2. Petras")...

// const myName = "Egle";
// const count = 10;
// for (let i = 0; i < count; i++) {
//   console.log(`${i}. ${myName}`);
// }

//? TASK 4.
//? Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

//arba
let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}
