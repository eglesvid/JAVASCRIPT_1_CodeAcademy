//! event general example
function start() {
  for (let i = 0; i < document.body.children.length; i++) {
    console.log(document.body.children[i].tagName);
  }
}

//tas pats, bet su arrow parasyta:

const startArrow = () => {
  for (let i = 0; i < document.body.children.length; i++) {
    console.log(document.body.children[i].tagName);
  }
};

const printMousePosition = (event) => {
  console.log(event);
  console.log(event.clientX, event.clientY);
  console.log(event.target);
}; //lyg ir nepasiduodam jokiu parametru, bet pati narsykle ideda ta eventa (object) parametruose. Esme, kad tas event turi informacijos, kuria mes galim pasinaudoti. Su savybem apie ivyki. "As tau duosiu info apie ta eventa". Su event.target mes gaunam ta elementa, ant kurio ivyko ivykis.
//jeigu noriu, kad man islogintu ne kaip html, o kaip js objekta, tada rasau console.dir

const heading = document.querySelector("h1"); //1. pasiimam elementa
heading.addEventListener("click", printMousePosition); // 2. ir ant elemento uzsidedam event listener, kvieciam funkcija

//! most common events
//? mouse events

//click
const container = document.querySelector("div");
container.addEventListener("click", () => console.log("div click"));

//dblclick
container.addEventListener("dblclick", () => console.log("div double click"));

//mouseover
container.addEventListener("mouseover", () => console.log("div has mouseover"));

//mouseout
container.addEventListener("mouseout", () =>
  console.log("div has no mouseover")
);

//? keyboard events
//keypress
document.addEventListener("keypress", (e) => console.log(e.key));

//keydown
document.addEventListener("keyup", (e) => console.log(e));
