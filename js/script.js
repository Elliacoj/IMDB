import {Carrousel} from "./carrousel.js";

let arrayFeature = [];
let arrayFeatureUp = [];
let arrayActor= [];
let xhr = new XMLHttpRequest();
xhr.open("GET", "./management.php");
xhr.responseType = "json";

xhr.onload = function() {
    if(xhr.status === 200){
        let response = xhr.response;
        console.log(response['films'][0]);
        for(let x = 0; x < response["films"].length; x++) {
            let picture = response["films"][x]["features"].split(", ");
            arrayFeature.push("./img/films/" + picture[1]);
        }

        for(let x = 1; x < response["films"].length; x++) {
            let picture = response["films"][x]["features"].split(", ");
            arrayFeatureUp.push("./img/films/" + picture[0]);
        }

        arrayFeatureUp.push("./img/films/" + response["films"][0]["features"].split(", ")[0])

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

        for(let x = 0; x < response["actors"].length; x++) {
            arrayActor.push("./img/actors/" + response["actors"][x]["picture"]);
        }

        let carrouselActor = new Carrousel(arrayActor, "actor", document.getElementById("actorListCarrousel"), "100%", "100%", 100, 6, true, "left");
        carrouselActor.createCarrousel(2, 15, 2);
        carrouselActor.start(false);

        let actors = document.getElementsByClassName("actor");
        for(let actor of actors) {
            actor.style.cssText = actor.style.cssText +"border-radius: 50%;";
        }
    }
}
xhr.send();