//? TASK 1.
//? Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu!
//? (naudoti inline metoda: onclick="")
//?
//? TASK 2.
//? Perrašyti pirmą pratimą su addEventListener
//? (ir nuo šiol naudoti būtent jį ;) ).

const submitButton = document.querySelector("button");
submitButton.addEventListener("click", getAlert);

function getAlert() {
  alert("Egle");
}

getAlert();

//arba tiesiog html galejau parasyti //?<button onclick="alert('John')">Alert your name</button>
