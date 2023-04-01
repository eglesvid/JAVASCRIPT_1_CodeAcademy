//? TASK 1.
//? Susikuriame h1 elementą, jame įrašome savo vardą,
//? pastilizuojame, kad elementas būtų raudonas ir
//? pridedame jį prie <body>.

//? TASK 2.
//? Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų brand'ais.
//? <body> turi atsirasti <ul>, kuriame trys <li>.

const h1Element = document.createElement("h1");
h1Element.textContent = "Egle";
h1Element.style.color = "red";
document.body.append(h1Element);

const ulElement = document.createElement("ul");
const liElement1 = document.createElement("li");
liElement1.textContent = "Volvo";
const liElement2 = document.createElement("li");
liElement2.textContent = "VW";
const liElement3 = document.createElement("li");
liElement3.textContent = "Audi";

ulElement.append(liElement1, liElement2, liElement3);
document.body.append(ulElement);
