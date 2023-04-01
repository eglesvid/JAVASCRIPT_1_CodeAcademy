//? Sukurk programą, kurioje ilgas paragrafas.
//? Bandant kopijuoti kodą - išmeta, kad negalima kopijuoti.

document.querySelector("p").addEventListener("copy", (e) => {
  e.preventDefault();
  alert("Can't copy this");
});
