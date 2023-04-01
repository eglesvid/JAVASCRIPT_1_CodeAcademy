//? TASK 1.
//? Susikurkite projektą, be jokių HTML tag'ų body.
//? Su JavaScript sukurkite <h2> elementą su savo
//? vardu ir pridėkite į <body>.

// document.body.innerHTML = "<h2>Egle</h2>";

//? TASK 2.
//? Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown".
//? Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą.

// document.body.innerHTML = "<h1>Egle</h1>";

//arba

const myName = "Egle";
document.getElementById("name").textContent = myName;

document.querySelector("li:last-child").textContent = "Suris";
