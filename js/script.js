import {Carrousel} from "./carrousel.js";

let array = ["./img/logoIMDB.png"];

let carrouselMain = new Carrousel(array, "principal", document.getElementById("carrouselLeft"), "100%", "100%", 1, true, "left");
carrouselMain.createCarrousel();
carrouselMain.start();

let carrouselMainExt = new Carrousel(array, "secondary", document.getElementById("carrouselUp"), "100%", "85%", 3, false, "up");
carrouselMainExt.createCarrousel();
carrouselMainExt.start();

document.getElementById("secondary").style.cssText = document.getElementById("secondary").style.cssText + "top: 2%;";

let div = document.createElement("span");
document.getElementById("carrouselUp").appendChild(div);
div.innerHTML = "Browse trailers";
div.style.cssText = "position: absolute; bottom: 0%; margin-bottom: 0; color: white;";

let buttonPrincipal = document.getElementsByClassName("buttonprincipal")

buttonPrincipal[0].addEventListener("click", function () {
    carrouselMainExt.moveManual("left");
})

buttonPrincipal[1].addEventListener("click", function () {
    carrouselMainExt.moveManual("right");
})