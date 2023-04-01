/*
Add functionality in JS for slider to:
0. Make initial slider functionality - slide images;
1. Toolbar button hides/shows toolbar; 
2. Back button shows rewinds to previous img; 
3. Pause/play button changes icon and stops/starts carousel; 
4. Forward button takes to next image immediately. 
5. Shuffle button takes to one random image. And after that images goes in order. (Not random all the time, but just one image). 
6. Add functionality to use .fade class to make fade in, fade out between slides. 
*/

//Your JS goes here
const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];

let imageIndex = 0;

const imageElement = document.querySelector("img"); //DOM'e susikurem elementa
imageElement.src = images[imageIndex];

let intervalID = setInterval(changeImage, 2000);

function changeImage() {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  imageElement.src = images[imageIndex];
}

const toolbar = document.querySelector("#toolbar");
toolbar.addEventListener("click", toggleTools);

function toggleTools() {
  document.querySelector("nav").classList.toggle("hide"); //arba uzdeda, arba nuima klase
}
//2
const previousButton = document.querySelector("#slider-previous");
previousButton.addEventListener("click", showPrevious);

function showPrevious() {
  clearInterval(intervalID);
  imageIndex--;

  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }

  imageElement.src = images[imageIndex];
  intervalID = setInterval(changeImage, 2000);
}
//3
const playPauseIcon = document.querySelector("#slider-toggle i");
playPauseIcon.classList.add("fa-pause");
playPauseIcon.classList.remove("fa-play");

const pauseButton = document.querySelector("#slider-toggle");
pauseButton.addEventListener("click", togglePause);

let pause = false; //flagas, kokia busena to mygtuko

function togglePause() {
  playPauseIcon.classList.toggle("fa-pause");
  playPauseIcon.classList.toggle("fa-play");

  pause = !pause; //gerai zinot sita

  if (pause) {
    clearInterval(intervalID);
  } else {
    intervalID = setInterval(changeImage, 2000);
  }
}
//4
const forwardButton = document.querySelector("#slider-next");
forwardButton.addEventListener("click", changeImage);

function forwardImage() {
  clearInterval(intervalID);
  intervalID = setInterval(changeImage, 2000);
}
//5
const shuffleButton = document.querySelector("#slider-random");
shuffleButton.addEventListener("click", shuffleImage);

function shuffleImage() {
  clearInterval(intervalID);
  imageIndex = Math.floor(Math.random() * images.length);
  console.log(imageIndex);
  imageElement.src = images[imageIndex];
  intervalID = setInterval(changeImage, 2000);
}
//6
imageElement.addEventListener("load", fadeImage);
function fadeImage() {
  imageElement.classList.toggle("fade");
}

//!task - fix interval bug on forward and shuffle - done
//!also reiktu pabaigoje susitvarkyti/surusioti koda
