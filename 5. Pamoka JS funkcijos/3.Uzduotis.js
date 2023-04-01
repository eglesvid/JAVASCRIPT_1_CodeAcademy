//? Perrašykite šią “function declaration” būdu parašytą funkciją
//? į“arrow function” (jeigu manote, kad reikia, sutvarkykite funkcijos kūną):

// let cities = [
//   "Vilnius",
//   "Kaunas",
//   "Klaipėda",
//   "Šiauliai",
//   "Panevėžys",
//   "Telšiai",
// ];

// function getFavoriteCity(name, surname, city) {
//   let user = `${name} ${surname}`;
//   let favoriteCity = city;
//   return `${user} favorite city is ${favoriteCity}`;
// }

// console.log(getFavoriteCity("Marijus", "Romanovas", cities[5]));

// arrow function

let cities2 = [
  "Vilnius",
  "Kaunas",
  "Klaipėda",
  "Šiauliai",
  "Panevėžys",
  "Telšiai",
];

let getFavoriteCity = (name, surname, city) =>
  `${name} ${surname} favorite city is ${city}`;

console.log(getFavoriteCity("Marijus", "Romanovas", cities2[5]));
