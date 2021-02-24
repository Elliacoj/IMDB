import {Carrousel} from "./carrousel.js";

let array = ["./img/logoIMDB.png"];

let carrouselMain = new Carrousel(array, "principal", document.getElementById("carrouselLeft"), "100%", "100%", 1, true, "left");
carrouselMain.createCarrousel();
carrouselMain.start();

let carrouselMainExt = new Carrousel(array, "secondary", document.getElementById("carrouselUp"), "100%", "100%", 3, false, "up");
carrouselMainExt.createCarrousel();
carrouselMainExt.start();