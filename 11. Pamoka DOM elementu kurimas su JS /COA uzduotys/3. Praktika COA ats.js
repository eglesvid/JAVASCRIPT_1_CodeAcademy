document.body.style.background = "cyan";

// Main block

const main = document.createElement("main");
main.style.background = "white";
main.style.width = "70%";
main.style.margin = "10rem auto 0 auto";
main.style.padding = "1rem";
main.style.borderRadius = "0.5rem";
main.style.textAlign = "center";
document.body.append(main);

// Image
const img = document.createElement("img");
img.src =
  "https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-.jpg";
img.style.width = "10rem";
img.style.height = "10rem";
img.style.objectFit = "cover";
img.style.borderRadius = "70%";
img.style.padding = "0.5rem";
img.style.border = "1px solid #eee";
img.style.marginTop = "-6.5rem";
main.append(img);

// Text
const h1 = document.createElement("h1");
name.textContent = "Petras";
main.append(name);

// Text
const email = document.createElement("h2");
email.textContent = "petras@petras.com";
email.style.fontSize = "1.2rem";
email.style.color = "#888";
main.append(email);
