//! style manipulation examples

console.dir(document.querySelector("div"));
console.dir(document.querySelector("div").style);
console.dir(document.querySelector("div").style.border);

const allDivs = document.querySelectorAll("div");

//! 1 manipulate with style property changes; jeigu norim tik viena kokia savybe pakeist, naudokim sita
for (let i = 0; i < allDivs.length; i++) {
  //   console.log(allDivs[i].style);  su situ budu nenusimusa savybes, tik pakeiciam tam tikra konkrecia vieta, auksti, ploti
  allDivs[i].style.width = "200px";
  allDivs[i].style.height = "200px";
  allDivs[i].style.border = "1px solid black";
  allDivs[i].style.backgroundColor = "red";
}

//! 2 set with function setAttribute("attribute name", "new attribute value"); pasirinkto elemento visos savybes issitrina ir overridina. Jeigu visa stiliu reikia perasyt, tada patogiau sita arba 3. naudot
allDivs[0].setAttribute(
  "style",
  "width: 200px; height: 200px; border: 1px solid black; background-color: green"
);
console.log(allDivs[0].style);

//! 3 set with cssText; overridina irgi
allDivs[1].style.cssText =
  "width: 200px; height: 200px; border: 1px solid black; background-color: blue";

//? TASK
// h1, h2, h3 uzdekit stiliu, kuris atitiktu:
// color: crimson;
// font-size: 30px;

const allHeadings = document.querySelectorAll("h1, h2, h3");

for (let i = 0; i < allHeadings.length; i++) {
  allHeadings[i].style.color = "crimson";
  allHeadings[i].style.fontSize = "30px";
}

allHeadings[1].setAttribute("style", "color: blue; font-size: 15px");

allHeadings[2].style.cssText = "color: green; font-size: 15px";

//arba
// const headingFirst = document.querySelector("h1");
// const headingSecond = document.querySelector("h2");
// const headingThird = document.querySelector("h3");
// headingFirst.style.color = "crimson";
// headingFirst.style.fontSize = "30px";
// headingSecond.setAttribute("style", "color: crimson; font-size: 30px;");
// headingThird.style.cssText = "color: crimson; font-size: 30px;";

//arba taip galejau pasiimti:
// const [first, second, third] = document.querySelectorAll("h1, h2, h3");

//! Date object (idiegtas JS'te)

let result;

result = new Date();
result = new Date(0);
result = new Date(24 * 60 * 60 * 1000);
result = new Date("1995-02-11");
result = typeof new Date();
result = new Date().getTime();
result = Date.now();
result = +new Date();

const dateNow = new Date();
result = dateNow.getFullYear();
result = dateNow.getMonth();
result = dateNow.setFullYear("1991");
result = dateNow.getFullYear();
result = dateNow.toISOString();
result = dateNow.toLocaleDateString();
result = dateNow.toLocaleTimeString(); //kiek dabar yra konkreciai valandu

console.log(result);

const runClock = () => {
  document.querySelector(
    "div"
  ).innerHTML = `<h1>${new Date().toLocaleTimeString()}</h1>`;
};

setInterval(runClock, 1000);

//! Extras
//Kokius kintamuju tipus naudojam JS? Kaip jie declaruojami?
// const variableNotChangingValue = 'example';
// let variableNotChanging = false;

//? Kokie duomenu tipai dazniausiai naudojami (3 duomenu primityvieji tipai,
//? 2 duomenu strukturos)?
// boolean number string
// array, object
// const booleanVariable = true;
// const stringVariable = "String kintamasis";
// const numberVariable = 1999;
//
// const arrayVariable = ["Mantas", "Jonas", "Petras"];
// console.log(arrayVariable[2]);
// console.log(["Mantas", "Jonas", "Petras"][2]);
// const objectVariable = {
//   vardas: "Jonas",
//   style: 1,
//   bool: true,
//   arrayVariable: [1, 2, 3]
// };

//? Kuom skiriasi == ir ===?
// console.log(1 == "1");
// console.log(1 === "1");

//? Kokie yra loginio neigimo, ARBA ir AND operatoriai?

// let isItWarm = true;
// console.log(!isItWarm);

// console.log(true && false);
// console.log(true || false);

//? ternary - patogus trumpiem klausimams
// jis yra vietoj if'o.
// isItWarm ? console.log("warm") : console.log("cold");
// const weather = isItWarm ? "warm" : "cold";
// console.log(weather);
//
// if (isItWarm) {
//   console.log("warm in if statement");
// } else {
//   console.log("cold in if statement");
// }
