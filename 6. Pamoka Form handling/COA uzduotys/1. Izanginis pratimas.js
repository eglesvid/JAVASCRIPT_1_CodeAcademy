//? Sukurk input į kurį įvestum savo vardą.
//? Submit paspaudus - išoktų alert su tavo vardu.

const nameInput = document.querySelector("input");

document.querySelector("form").addEventListener("submit", alertMyName);

function alertMyName(e) {
  e.preventDefault();
  alert(nameInput.value);
}
