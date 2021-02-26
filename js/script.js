import {Carrousel} from "./carrousel.js";

let arrayFeature = [];
let arrayFeatureUp = [];
let arrayActor= [];
let xhr = new XMLHttpRequest();
xhr.open("GET", "./img/film.json");
xhr.responseType = "json";

xhr.onload = function() {
    if(xhr.status === 200){
        let response = xhr.response;

        for(let x = 0; x < 9; x++) {
            arrayFeature.push(response[0][x][0]["features"][1]);
        }

        for(let x = 1; x < 9; x++) {
            arrayFeatureUp.push(response[0][x][0]["features"][0]);
        }
        arrayFeatureUp.push(response[0][0][0]["features"][0])

        let carrouselMain = new Carrousel(arrayFeature, "principal", document.getElementById("carrouselLeft"), "100%", "100%", 100, 1, true, "left");
        carrouselMain.createCarrousel(5, 10);
        carrouselMain.start();

        let carrouselMainExt = new Carrousel(arrayFeatureUp, "secondary", document.getElementById("carrouselUp"), "80%", "85%", 40, 3, false, "up");
        carrouselMainExt.createCarrousel(15,15, 2);
        carrouselMainExt.start();

        document.getElementById("secondary").style.cssText = document.getElementById("secondary").style.cssText + "top: 2%;";

        let div = document.createElement("span");
        document.getElementById("carrouselUp").appendChild(div);
        div.innerHTML = "Browse trailers";
        div.style.cssText = "position: absolute; bottom: 0%; margin-bottom: 0; color: white;";

        let buttonPrincipal = document.getElementsByClassName("buttonprincipal")

        buttonPrincipal[0].addEventListener("click", function () {
            carrouselMainExt.moveManual("right");
        })

        buttonPrincipal[1].addEventListener("click", function () {
            carrouselMainExt.moveManual("left");
        });

        let carrouselFanFavor = new Carrousel(arrayFeatureUp, "fanfavor", document.getElementById("fanFavoritesCarrousel"), "100%", "100%", 100, 6, true, "left");
        carrouselFanFavor.createCarrousel(2, 10, 2);
        carrouselFanFavor.start(false);
    }
}
xhr.send();

let xhrActor = new XMLHttpRequest();
xhrActor.open("GET", "./img/actor.json");
xhrActor.responseType = "json";
xhrActor.onload = function() {
    if(xhrActor.status === 200) {
        let response = xhrActor.response;

        for(let x = 0; x < 9; x++) {
            arrayActor.push(response[0][x][0]["features"][0]);
        }
    }

    let carrouselActor = new Carrousel(arrayActor, "actor", document.getElementById("actorListCarrousel"), "100%", "100%", 100, 6, true, "left");
    carrouselActor.createCarrousel(2, 15, 2);
    carrouselActor.start(false);

    let actors = document.getElementsByClassName("actor");
    for(let actor of actors) {
        actor.style.cssText = actor.style.cssText +"border-radius: 50%;";
    }
}
xhrActor.send();

