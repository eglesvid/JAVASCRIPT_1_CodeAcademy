//? Parašykite programą, kurioje būtų tekstas "Nespauskite mygtuko".
//? Vartotojui paspaudus bet kokį mygtuką,
//? turi pasikeisti tekstas į "Neklausote manęs".

document.body.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    document.querySelector("h1").innerText = "Neklausote manęs";
  }
});
