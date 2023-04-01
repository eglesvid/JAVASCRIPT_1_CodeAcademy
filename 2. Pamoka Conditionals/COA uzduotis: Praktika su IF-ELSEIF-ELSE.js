//? TASK 1.
//? Sukurk variable 'legalAge', kuris būtų lygus 20.
//? Antra variable 'clientAge' su bet kokiu skaičiumi.
//? Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.

// const legalAge = 20;
// let clientAge = prompt("Iveskite savo amziu");
// if (clientAge >= legalAge) {
//   console.log("Klientas pasiekes legal age");
// } else if (clientAge < legalAge) {
//   console.log("Klientas nera pasiekes legal age");
// }

//arba sustriau+

// const legalAge = 20;
// let clientAge = prompt("Iveskite savo amziu");
// if (clientAge >= legalAge) {
//   alert("Jus esate legalaus amziaus");
// } else {
//   alert("Jus neesate lagalaus amziaus");
// }

// switch (true) {
//   case clientAge >= 1 && clientAge < 20:
//     console.log("Child");
//     break;
//   case clientAge >= 20 && clientAge <= 99:
//     console.log("Adult");
//     break;
//   default:
//     console.log("Invalid age");
// }

//? TASK 2.
//? Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys
//? "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės.
//? Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant
//? 'length' property (pvz.: "Petras".length arba su kintamu: name.length).

// const myName = "Egle";
// if (myName.length > 6) {
//   console.log("Ilgas vardas");
// } else if (myName.length < 6) {
//   console.log("Trumpas vardas");
// }

//arba

// let name = prompt("Irasykite savo varda");
// if (name.length > 6) {
//   console.log("Ilgas vardas");
// }

//? TASK 3.
//? Sukurt kintamąjį su savo amžiumi. Patikrink:
//? jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age";
//? jei tarp 1 ir 18 - "Child";
//? jei tarp 19 ir 99 - "Adult".

// let yourAge = prompt("Iveskite savo amziu");
// if (yourAge >= 100 || yourAge < 0) {
//   console.log("Invalid age");
// } else if (yourAge < 18) {
//   console.log("Child");
// } else {
//   console.log("Adult");
// }

//? TASK 4.
//? Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui.
//? Sukurk if-else, kuris pasakys ar tas brand'as priklauso
//? VW Group, ar BMW Group, ar nei vienam.
//? VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
//? BMW group priklauso: BMW, Mini, Rolls-Royce.

// let car = prompt("Irasykite automobilio brand'a");
// if (
//   car == "VW" ||
//   car == "Audi" ||
//   car == "Bentley" ||
//   car == "Bugatti" ||
//   car == "Lamborghini" ||
//   car == "Porsche"
// ) {
//   console.log("VW group");
// } else if (car == "BMW" || car == "Mini" || car == "Rolls-Royce") {
//   console.log("BMW group");
// } else {
//   console.log("Automobilis nepriklauso nei vienam brand'ui");
// }

//arba su budu, kur nereik kartoti

let car = prompt("Enter your car manufacturer");

if (
  ["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche"].includes(car)
) {
  console.log("Your car belongs to VW club");
} else if (["BMW", "Mini", "Rolls-Royce"].includes(car)) {
  console.log("Your car belongs to BMW club");
} else {
  console.log("Your car belongs nether club");
}
