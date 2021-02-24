import {Carrousel} from "./carrousel";

let carrouselMain = new Carrousel("ahah", "principal", document.getElementById("carrouselLeft"), "40%", "350px", 1, true, "left");
carrouselMain.createCarrousel();
carrouselMain.start();