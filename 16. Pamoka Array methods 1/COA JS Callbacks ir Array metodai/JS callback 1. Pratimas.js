//? Sukurk dvi funkcijas: alertName, consoleName.
//? Abi funkcijos turės vieną parametrą - vardą.
//? Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins.
//? O dabar susikuriame pagrindinę funkciją (coreFunction),
//? ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides
//? (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"),
//? tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

function alertName(name) {
  alert(name);
}

function consoleName(name) {
  console.log(name);
}

function coreFunction(name, callback) {
  const capitalizedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  callback(capitalizedName);
}

coreFunction("petras", consoleName);
