//? TASK 3
//? Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok
//? (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.).
//? Naudojant map metodą, padaryk, kad susikurtų naujas array
//? (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija
//? (pvz. "peTras" => "Petras").

// const names = ["peTras", "Jonas", "aNTanaS"];

// const newNames = names.map(
//   (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
// );
// console.log(newNames);

//? TASK 4
//? Sukurk Array su savo draugų amžiais (nuo 1 iki 99).
//? Naudojant filter - prafiltruok tik tuos skaičius,
//? kurie didesni arba lygūs 18.

// const ages = [1, 20, 5, 10, 22, 50, 40, 39];
// const filteredAges = ages.filter((age) => age >= 18);
// console.log(filteredAges);

//COA ATS:
const ages = [1, 20, 5, 10, 22, 50, 40, 39];
console.log(ages.filter((x) => x >= 18));
