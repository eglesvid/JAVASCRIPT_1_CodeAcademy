//? Uzduotis nr. 1
//? Pabandykime atlikti 5 masyvo (Array) operacijas.
//? -Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
//? -Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
//? -Viduryje esančią reikšmę pakeiskite „Classics“.
//? -Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
//? -Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.
//? Rezultatai:
//? Jazz, Blues
//? Jazz, Blues, Rock-n-Roll
//? Jazz, Classics, Rock-n-Roll
//? Jazz
//? Classics, Rock-n-Roll
//? Rap, Reggae, Classics, Rock-n-Roll

// let value;
// const styles = ["Jazz", "Blues"];
// console.log(styles);
// value = styles.push("Rock-n-Roll");
// console.log(styles);
// styles[1] = "Classics";
// console.log(styles);
// value = styles.shift();
// console.log(styles);
// console.log(value);
// value = styles.unshift("Reaggae");
// console.log(styles);
// value = styles.unshift("Rap");
// console.log(styles);

//Marijaus:
const musicStyles = ["Jazz", "Blues"];
console.log(musicStyles);
musicStyles.push("Rock-n-Roll");
console.log(musicStyles);
musicStyles[1] = "Classics";
console.log(musicStyles);
const deleted = musicStyles.shift();
console.log(deleted);
console.log(musicStyles);
musicStyles.unshift("Rap", "Reggae");
console.log(musicStyles);
