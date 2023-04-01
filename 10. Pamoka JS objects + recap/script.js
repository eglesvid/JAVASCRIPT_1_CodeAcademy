// const kazkas = 5;

// // const name = `${2 + 2} asdkd kajs ${kazkas > 6 ? "Teisinga" : "Neteisinga"}`;

// // const number = 6;

// // const bool = true;
// // console.log(bool);

// // if (bool) {
// //   console.log("Teisybe");
// // }

// // const arr = [2, "labas", true, [123]];
// // console.log(arr[4]);

// // arr[2] = "Kazkas kito";

// // console.log(arr);

// function sayStuff() {
//   console.log("Stuff");
// }

// const obj = {
//   skaicius: kazkas,
//   name: "Marius",
//   lastName: "Matu",
//   age: 26,
//   sayHello: () => {
//     console.log("Hello");
//   },
//   sayBye: function () {
//     console.log("Bye");
//   },
//   sayKazkas: sayStuff,
//   innerObject: {
//     name: "Tadas",
//     goingDeeper: {
//       name: "Kazkas",
//     },
//   },
// };

// // console.log(obj.name);

// // obj.name = "Tomas";

// // obj.hasCat = false;

// // delete obj.name;

// // console.log(obj.name);

// // obj.innerObject.goingDeeper.name = "Egle";

// // console.log(obj.innerObject.goingDeeper.name);

// // console.log(document.getElementById(elementId));

// //? operatoriai
// //? FALSY values(padeda patikrinti savo reiksmes, nekonvertuojant ju i boolean): 0, "", null (neturi reiksmes), undefined
// // let test = 4;
// // test = !!test; // hackas, jeigu koki skaiciu reikia paversti boolean reiksme
// // console.log(test);

// //? conditionals

// let name = !!"";

// if (6 > 10) {
//   console.log("true");
// } else if (6 > 5) {
//   console.log("false");
// } else {
//   console.log("Super false");
// }

// switch (14) {
//   case 15:
//     console.log("musu reiksme yra 15");
//     break;
//   case 10:
//     console.log("musu reiksmes yra 10");
//     break;
//   case 12:
//   case 13:
//     console.log("musu reiksmes yra 12 arba 13");
//     break;
//   default:
//     console.log("default");
//     break;
// }

// if (5 > 10) {
//   console.log("teisybe");
// } else {
//   console.log("NEteisybe");
// }

// //? ternary
// 5 > 10 ? console.log("teisybe") : console.log("NEteisybe");

// alert("Kazkas");
//
// const number = prompt("Ivesk skaiciu");
// console.log(number);
//
// const number = confirm("Ivesk skaiciu");
// console.log(number);
//
// console.log(Math.max(5, 6, -3, -100));
//
// console.log(Number.parseInt("asa123sal"));
// console.log(typeof "123");
// console.log(new Date().getFullYear());

//? ciklai
// for (let index = 0; index <= 10; index++) {
//   console.log(index);
// } // for cikals vienintelis turi index'a

//? while ciklas
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//? do while
// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i > 10);

//? selectoriai
// const firstDiv = document.getElementById("pirmas");
// console.log(firstDiv);

// const allDivs = document.querySelectorAll("div");
// console.log(allDivs);

// const par = document.querySelector("p");
// console.log(par);

// const blueDiv = document.querySelector(".blue");
// console.log(blueDiv);

// const pirmasDiv = document.querySelector("#pirmas");
// console.log(pirmasDiv);

// //? events
// document.querySelector("button").addEventListener("click", () => {
//   console.log("Say hello");
// });

// document.querySelector("input").addEventListener("blur", () => {
//   console.log("blur");
// });

// document.querySelector("input").addEventListener("focus", () => {
//   console.log("focus");
// });

// document.querySelector("input").addEventListener("input", () => {
//   console.log("input");
// });

// document.querySelector("input").addEventListener("input", (e) => {
//   console.log(e);
// });

// //? funkcijos

// function doStuff(name, age) {
//   console.log(name, age);
//   return 5;
// }
// const res = doStuff("Marius", 26);
// console.log(res);

// //arrow funkcijos yra visos anonimines

// const myFunction = function () {
//   console.log("asahd");
// };

// const arrowFunction = (name) => {
//   return 5;
// };
// const res1 = arrowFunction("Marius");
// console.log(res1);

//? schedule setInterval

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

// setTimeout(() => {
//   console.log("Praejo laikas");
// }, 1000);//viena karta padare ir nebesikartoja

//? document location
// document.location.assign("https://www.google.com/");
// document.location.replace("https://www.google.com/");
// document.location.assign("second.html");
// document.location.reload();//iki kol x paspausiu, jis reloadins
// document.querySelector("button").addEventListener("click", () => {
//   document.location.reload();
// });

//? document body
// console.log(document.body);
// console.log(document.forms); // budas prieiti prie formu
