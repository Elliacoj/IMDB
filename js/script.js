import {Carrousel} from "./carrousel.js";

let arrayFeature = [];
let arrayFeatureUp = [];
let xhr = new XMLHttpRequest();
xhr.open("GET", "./img/film.json");
xhr.responseType = "json";

xhr.onload = function() {
    if(xhr.status === 200){
        let response = xhr.response;
        for(let x = 1; x < 7; x++) {
            arrayFeature.push(response[0][x][0]["feature"]);
            console.log(arrayFeature.length);
        }

        for(let x = 2; x < 7; x++) {
            arrayFeatureUp.push(response[0][x][0]["feature"]);
            console.log(arrayFeature.length);
        }
        arrayFeatureUp.push(response[0][1][0]["feature"])

        let carrouselMain = new Carrousel(arrayFeature, "principal", document.getElementById("carrouselLeft"), "100%", "100%", 40  ,1, true, "left");
        carrouselMain.createCarrousel(5, 10);
        carrouselMain.start();

        let carrouselMainExt = new Carrousel(arrayFeatureUp, "secondary", document.getElementById("carrouselUp"), "80%", "85%", 40 ,3, false, "up");
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
        });
    }
}

xhr.send();




