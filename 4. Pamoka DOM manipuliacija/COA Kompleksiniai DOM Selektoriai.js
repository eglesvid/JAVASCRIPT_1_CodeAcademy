//? TASK 1.
//? Ištaisykite klaidą. Nusikopijuokite apačioje esantį kodą
//? ir su JavaScript pasikeiskite antrame paragrafe esančio
//? <span> tekstą - iš 'red' į 'blue':

document.querySelector(".bluetext > span").textContent = "blue";

//? TASK 2.
//? Sukurkite ordered list su trimis list item duota eilės tvarka:
//? "BMW group", "VW group" ir "GE".
//? Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis.
//? Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti).
//? Pirma Jūs turite pasiimt pirmo ir antro sąrašo elemento
//? reikšmes ir jas išsisaugoti į kintamuosius.

const firstLineItem = document.querySelector("li:first-child");
const secondLineItem = document.querySelector("li:nth-child(2)");

const bmw_group = firstLineItem.textContent;
const vw_group = secondLineItem.textContent;

firstLineItem.textContent = vw_group;
secondLineItem.textContent = bmw_group;
