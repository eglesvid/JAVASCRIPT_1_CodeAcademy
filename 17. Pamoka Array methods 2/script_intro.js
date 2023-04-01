function getName() {
  const name = prompt("Enter your name");
  return name;
}
function getLastName() {
  const lastName = prompt("Enter your lastname");
  return lastName;
}

function displayName(nameFn) {
  console.log("Call me " + nameFn());
}

// debugger; // nuo tos vietos galesim ziuret kintamuju reiksmes
displayName(getName);
// displayName(getLastName);
