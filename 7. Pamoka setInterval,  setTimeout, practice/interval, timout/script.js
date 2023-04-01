//! simple setInterval example
// const intervalID = setInterval(logHello, 2000);
// let intervalCounter = 0;

// function logHello() {
//   console.log("Hello interval");
//   intervalCounter++;
//   console.log(intervalCounter);
//   if (intervalCounter >= 5) {
//     clearInterval(intervalID);
//   }
// } //jeigu rasyciau kaip arrow funkcija, tuomet pries tai reiketu rasyt

//!simple setTimeout example (labai retai reikia)
// console.time("setTimeout timer");

// const logHelloWithTimeout = (firstName, lastName) => {
//   console.log(`My name is ${firstName} and last name is ${lastName}`);
//   console.timeEnd("setTimeout timer");
// };
// const timeoutID = setTimeout(logHelloWithTimeout, 5000, "Egle", "Sviderskyte");

//! simple caroussel example (kad kazkiek laiko keisis nuotraukas)
const images = [
  "https://images.unsplash.com/photo-1650873797988-abf1338073ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1650872553203-9a2b541245d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1650751557709-06a218d96bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
];

let imageIndex = 0;

const imageElement = document.querySelector("img"); //DOM'e susikurem elementa
imageElement.src = images[imageIndex];

const intervalID = setInterval(changeImage, 2000);

function changeImage() {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  imageElement.src = images[imageIndex];
}

setTimeout(stopCaroussel, 10000);

function stopCaroussel() {
  clearInterval(intervalID);
  imageElement.src = images[0];
}
