//? H1 elemente parašykite savo vardą.
//? Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano,
//? dvigubai didesniu font'o dydžiu ir raudona spalva.

const heading = document.querySelector("h1");

heading.addEventListener("click", () => {
  heading.style.textAlign = "center";
  heading.style.fontSize = "4rem";
  heading.style.color = "red";
});

//arba COA ats:
// document.querySelector("h1").addEventListener("click", (event) => {
//   event.target.style.textAlign = "center";
//   event.target.style.fontSize = "4rem";
//   event.target.style.color = "red";
// });
