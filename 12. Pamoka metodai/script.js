//!JS Booleans

// const test = true;

// console.log(typeof test.toString());

//! Number methods
//?toString()

// const test = 25;

// console.log(typeof test.toString());

//?toExponential() (skaiciu kitokiu formatu atvaizduoja)
// const test = 25;

// console.log(typeof test.toExponential());

//?toFixed() (stringa grazina ir paformatuoja skaicu, gali vienetuka gale ismesti - JS nera labai skaciavimams skirtas...). toFixed is perfect for working with money.

// const test = 25.76182638126;

// console.log(typeof test.toFixed(3));

//?toPrecisions() (stringa grazina ir paformatuoja skaiciu)
// const test = 25.76182638126;

// console.log(typeof test.toPrecision(15));

//?valueOf() (grazina skaiciaus reiksme kaip skaiciu)
// const test = 25.76182638126;

// console.log(test.valueOf());

//! String methods (dazniausiai naudojami)

//? text.length (kiek simboliu yra viduje stringo)
// const test = "hello world";

// console.log(test.length);

//? slice (isimti dali stringo) (skaiciuoja nuo nulio ir paskutinis skaicius not inclusive)

// const test = "hello world";

// console.log(test.slice(4, 7));
// console.log(test.slice(4)); //duoda nuo 4 carachter iki galo
// console.log(test.slice(-4, -1)); //paima nuo galo

//? substring ()
// const test = "hello world";
// console.log(test.substring(-4, 5));

//? substr() mes parodom nuo kur norim pradeti, o 2 - kiek character norim paimti
// const test = "hello world";
// console.log(test.substr(4, 5));
// console.log(test.substr(-4));

//? replace() kazkokiai daliai pakeisti kazkuo kitu. Pakeicia tiktai pacia pirma vieta, kuria randa. Jis yra keysensitive. Grazina nauja stringa, kuris yra pakeistas (originalo nepakeicia VISI SITIE METODAI)
// const test = "hello world hello";
// console.log(test.replace(/HELLO/i, "goodbye")); // console.log(test.replace(/hello/g, "goodbye")); abudu pakeicia i goodbye // console.log(test.replaceAll("hello", "goodbye")); sitas gali ne visur veikti, nes naujas
// console.log(test);

// const test = "hello world hello";
// console.log(test.replace("hello world", "labas"));
// console.log(test);

//? toUpperCase, toLowerCase
// const test = "hello DHSJCBworld hello";
// console.log(test.toUpperCase());
// console.log(test);

//? concat() sujungti dviem arba daugiau stringu

// const test = "hello world hello";
// const test2 = "hello part 2";
// console.log(test.concat(test2)); //arba console.log(test + test2);

//? string trim () dazniausiai su input naudojamas. Istrina whitespaces, nenorim atsitiktiniu tarpu. Jis nuima juos nuo pradzios ir galo
// const test = "    hello world hello     ";
// console.log(test.trim(test));

//? trimStart() tik nuo pradzios nuima
// const test = "    hello world hello     ";
// console.log(test.trimStart(test));

//? trimEnd() tik nuo galo nuima
// const test = "    hello world hello     ";
// console.log(test.trimEnd(test));

//? string padding padStart() pads a string with another string. Veikia tik ant stringu, ant skaiciaus NE
// const test = "hello world hello";
// console.log(test.padStart(50, "x")); //kiek laisvu simboliu, tiek ir x

//? string padding padEnd() padaro stringa tokio ilgumo, koki mes parasom.
// const test = "hello world hello";
// console.log(test.padEnd(50, "x")); //kiek laisvu simboliu, tiek ir x

//? characteriams charAt()
// const test = "hello world hello";
// console.log(test.charAt(8)); //jei reik kazkoki konkretu character pasiziuret // arba clg(test[0])

//? charCodeAt (utf-16 grazina)
// const test = "hello world hello";
// console.log(test.charCodeAt(8));

//? charCodeAt
// const test = "hello world hello";
// console.log(test.charCodeAt(8));

//? bsk pvz:
// const test = "hello world hello";
// console.log(test[50]);
// test[8] = "z";
// console.log(test);// nepasikeite raide. negalim keisti vieno konkretaus character

//? split
// const test = "hello world hello";
// console.log(test.split(" ")); //per kuria vieta norim kirst stringa //console.log(test.split(" ").join(""))
