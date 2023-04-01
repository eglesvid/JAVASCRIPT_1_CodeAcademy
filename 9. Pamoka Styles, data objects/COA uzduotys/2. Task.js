//? Išbandome ekraną. Sukurkite mygtuką su HTML.
//? JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė.
//? Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę.
//? Paspaudus vėl - į viršų, kairę pusę.
//? Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

const button = document.querySelector("button");
button.style.cssText = "position:absolute; top: 0; left: 0";

let isInOriginalPosition = true;
function changePosition(event) {
  event.target.style.cssText = isInOriginalPosition
    ? "position:absolute; bottom:0; right:0;"
    : "position:absolute; top:0; left:0;";
  isInOriginalPosition = !isInOriginalPosition;
}

button.addEventListener("click", changePosition);
