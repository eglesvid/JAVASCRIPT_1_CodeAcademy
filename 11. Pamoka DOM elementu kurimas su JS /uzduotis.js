const mainTag = document.querySelector("main");

const h2Tag = document.createElement("h2");
h2Tag.textContent = "This is an H2 tag"; //susikurem. Dabar reik pridet prie HTML. Reik pasiimt main tag'a pirma, nes i ji dedam

const pTag = document.createElement("p");
pTag.textContent = "This is a P tag";

const ulTag = document.createElement("ul");
const liTag = document.createElement("li");
liTag.textContent = "This is a li tag";

ulTag.append(liTag);

const pTag2 = document.createElement("p");
pTag2.textContent = "This is a second P tag";

mainTag.append(h2Tag, pTag, ulTag, pTag2); //su append i gala meta elementus

const h1Tag = document.createElement("h1");
h1Tag.textContent = "This is added to the front of main tag";

mainTag.prepend(h1Tag); //ne gale atsiranda, o i prieki ideda

const h1Tag2 = document.createElement("h1");
h1Tag2.textContent = "This was added with appendChild";
// mainTag.appendChild(h1Tag2); // daro ta pati, ka append daro. I appendChild tik viena galim idet, t.y. negalim per kableli rasyt.

mainTag.append("This is not an element"); //naudot append reiktu
mainTag.appendChild("This is not an element");
