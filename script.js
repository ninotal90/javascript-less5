"use strict";

1;

let newDiv = document.createElement("img");
newDiv.setAttribute(
  "src",
  "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
);
newDiv.setAttribute("alt", "image");
console.log(newDiv);

document.getElementById("wraper").appendChild(newDiv);
let newH2 = document.createElement("h2");
newH2.classList.add("title");
console.log(newH2);
document.getElementById("wraper").appendChild(newH2);
newH2.textContent = "image title";
newH2.style.color = "red";
newH2.style.fontSize = "30px";

2;
let arraydiv = document.querySelectorAll(".conteiner1");
arraydiv.forEach(function (item) {
  let newPteg = document.createElement("p");

  console.log(arraydiv);
  newPteg.classList.add("text");
  newPteg.textContent = "hello";
  console.log(newPteg);

  item.appendChild(newPteg);
});

3;
let navigation = document.getElementById("navBar");
let burgerBar = document.querySelector(".burger-bar");

burgerBar.addEventListener("click", function () {
  navigation.classList.add("active");
});
