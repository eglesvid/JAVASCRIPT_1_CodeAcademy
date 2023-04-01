//? Ne vien skaičius galime sort'int, bet ir pagal
//? keisčiausius norimus parametrus, pvz zemiau.
//? Svarbiausia, kas sort metodas atgal gautų teigiamą ar neigiamą skaičių
//? - ir žinotų, ar apkeisti a ir b vietomis; ar ne.
//? O kaip tuos skeičius gaunam, nesvarbu - tai gali būti matematinis skaičiavimas,
//? gali būti if-else (ar ternary operator), ar kažkas kito...

// const phones = ["iPhone 7", "Samsung 9", "OnePlus"];

// phones.sort((a, b) => {
//   if (a.includes(" ") && !b.includes(" ")) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// console.log(phones);

//? TASK 1
//? Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

// const friends = ["Jonas", "Paulius", "Antanas"];
// friends.sort();
// console.log(friends);

//? TASK 2
//? Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.
// const friends = ["Jonas", "Paulius", "Antanas"];
// friends.sort((a, b) => (b > a ? 1 : -1));
// console.log(friends);

//? TASK 3
//? Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS
//? sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

// const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

//? TASK 4
//? Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią
//? skaičių (vieną skaičių).

const numbers = [10, 5, 20, 4];
numbers.sort((a, b) => b - a);
console.log(numbers[0]);
