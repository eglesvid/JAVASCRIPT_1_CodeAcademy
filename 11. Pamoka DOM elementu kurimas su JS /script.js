const par = document.createElement("p");
par.textContent = "Mano sukurtas paragrafas";
console.log(par);

const div = document.querySelector("div");
console.log(div);

div.append(par);

// par.id = "manoId";

par.setAttribute("cake", "cheeseCake"); //su set, priesingai nei virsuj, galim uzdet ir neapibreztus, t.y. bet ka ("cake", "cheesecake")

const attribute = par.getAttribute("cake"); // su get verte pasiimam
console.log(attribute);
