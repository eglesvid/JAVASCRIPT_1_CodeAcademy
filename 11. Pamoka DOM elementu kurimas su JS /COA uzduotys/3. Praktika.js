const body = document.querySelector("body");
const main = document.createElement("main");
const img = document.createElement("img");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const p = document.createElement("p");

h2.textContent = "Trent Waltson";
h3.textContent = "Founder & 1/3 of @paravelinc";
p.textContent = "Austin, TX";

main.append(img, h2, h3, p);
body.append(main);

body.setAttribute("style", "background-color: lightblue");
main.setAttribute(
  "style",
  "text-align: center; background-color: white; width: 70%; margin: 3rem auto; border-radius: 10px"
);

img.src =
  "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

img.setAttribute(
  "style",
  "width: 15%; border: 3px solid white; border-radius: 20%; box-shadow: 1px 1px 2px 1px lightgrey; transform: translate(0, -1rem)"
);

h2.setAttribute("style", "margin-top:0; opacity: 0.7");
h3.setAttribute("style", "color: gray");
p.setAttribute("style", "color: gray; padding-bottom: 2rem");
