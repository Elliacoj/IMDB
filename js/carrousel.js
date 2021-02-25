export {Carrousel};

/**
 *
 * @param array
 * @param name
 * @param add
 * @param width
 * @param height
 * @param sizeImage
 * @param numberImage
 * @param button
 * @param direct
 * @constructor
 */
let Carrousel = function(array, name, add, width, height, sizeImage ,numberImage, button = true, direct = "left") {
    this.array = array;
    this.name = name;
    this.number = numberImage;
    this.direct = direct;

    /**
     * Creat a carrousel design
     */
    this.createCarrousel = function(widthSize = 15, heightSize = 15) {
        let container = document.createElement("div");
        let nameButton = "button" + this.name;

        for(let x = 0; x <  this.number + 4; x++) {
            let div = document.createElement("div");
            container.append(div);

            if(x < this.number + 2) {
                div.className = this.name;
            }
            else {
                div.className = nameButton;
            }
        }

        let divChild = document.getElementsByClassName(this.name);
        let divButton = document.getElementsByClassName(nameButton);
        let addCss = "background-repeat: no-repeat; background-size: " + sizeImage + "%; background-position: center;";

        container.id = this.name;
        container.style.cssText = "width: " + width + "; height:" + height + "; overflow: hidden; position: relative;" + `${addCss}`;
        add.append(container);

        if(direct === "left" || direct === "right") {
            for(let x = 0; x < this.number + 2; x++) {
                divChild[x].style.cssText = 'position: absolute;height: 100%;'  + `${addCss}`;

                if(x === 0 || x === this.number + 1) {
                    divChild[x].style.width = (100 / this.number) + "%";
                }
                else {
                    divChild[x].style.width = (100 / this.number) + "%";
                    divChild[x].style.left = ((100 / this.number) * (x - 1)) + "%";
                }
            }

            divChild[0].style.left = (-(100 / this.number)) + "%";
            divChild[this.number + 1].style.left = "+100%";
        }
        else {
            for(let x = 0; x < this.number + 2; x++) {
                divChild[x].style.cssText = `position: absolute; width: 100%; ${addCss}`;

                if(x === 0 || x === this.number + 1) {
                    divChild[x].style.height = (100 / this.number) + "%";
                }
                else {
                    divChild[x].style.height = (100 / this.number) + "%";
                    divChild[x].style.top = ((100 / this.number) * (x - 1)) + "%";
                }
            }

            divChild[0].style.top = (-(100 / this.number)) + "%";
            divChild[this.number + 1].style.top = "+100%";
        }

        for(let x = 0; x < 2; x++) {
            divButton[x].style.cssText = "position: absolute; width: " + widthSize + "%; height: " + heightSize + "%; background-color: white; z-index: 1; opacity: 0.5;";
        }

        if(direct === "left" || direct === "right") {
            divButton[0].style.cssText = divButton[0].style.cssText + "left: 2%; clip-path: polygon(100% 100%, 100% 0, 0 50%); top: 42.5%;";
            divButton[1].style.cssText = divButton[1].style.cssText + "right: 0; clip-path: polygon(0 0, 0 100%, 100% 50%); top: 42.5%;";
        }
        else {
            divButton[0].style.cssText = divButton[0].style.cssText + "up: 2%; clip-path: polygon(50% 0, 0 100%, 100% 100%); left: 42.5%;";
            divButton[1].style.cssText = divButton[1].style.cssText + "bottom: 0; clip-path: polygon(100% 0, 0 0, 50% 100%); left: 42.5%;";
        }

        let y = 0
        for(let x = 0; x < this.number + 2; x++) {
            if(y === (array.length)) {
                y = 0;
                divChild[x].style.backgroundImage = "url('" + this.array[y] + "')";
                y++;
            }
            else {
                divChild[x].style.backgroundImage = "url('" + this.array[y] + "')";
                y++;
            }
        }

        if(button === false) {
            divButton[0].style.display = "none";
            divButton[1].style.display = "none";
        }
    }

    /**
     * Start carrousel animated
     */
    this.start = function () {
        let images = document.getElementsByClassName("" + this.name + "");

        /**
         * Begin carrousel
         */
        const carousel = () =>{
            let time = setTimeout(function () {
                if(direct === "left" || direct === "up") {
                    direction("-100%", "left", 2);
                }
                else {
                    direction("+100%", "right", 0);
                }
                removeListener(leftGo, rightGo);
            }, 3000);

            let nameButton = "button" + this.name;
            document.getElementsByClassName(nameButton)[0].addEventListener("click", leftGo);
            document.getElementsByClassName(nameButton)[1].addEventListener("click", rightGo);

            this.moveManual = function(directionMove) {
                if(directionMove === "left" || directionMove === "up") {
                    leftGo();
                }
                else {
                    rightGo();
                }
            }

            /**
             * Scroll left
             */
            function leftGo() {
                if(getComputedStyle(images[1])["transform"] === ("none")) {
                    clearTimeout(time);
                    direction("-100%", "left", 2);
                    removeListener(leftGo, rightGo);
                }
            }

            /**
             * Scroll right
             */
            function rightGo() {
                if(getComputedStyle(images[1])["transform"] === ("none")) {
                    clearTimeout(time);
                    direction("+100%", "right", 0);
                    removeListener(leftGo, rightGo);
                }
            }
        }

        carousel();

        /**
         * Remove listener of button left and right
         * @param leftGo
         * @param rightGo
         */
        function removeListener(leftGo, rightGo) {
            let nameButton = "button" + name;
            document.getElementsByClassName(nameButton)[0].removeEventListener("click", leftGo);
            document.getElementsByClassName(nameButton)[1].removeEventListener("click", rightGo);
        }

        /**
         * Function for animate the carrousel
         * @param direction
         * @param dir
         * @param number
         */
        const direction = (direction, dir, number) => {
            if(this.direct === "left" || this.direct === "right") {
                for(let x = 0; x < this.number + 2; x++) {
                    images[x].animate([
                        { transform: 'translateX(' + direction + ')' }
                    ], {
                        duration: 250,
                    });
                }
            }
            else {
                for(let x = 0; x < this.number + 2; x++) {
                    images[x].animate([
                        { transform: 'translateY(' + direction + ')' }
                    ], {
                        duration: 250,
                    });
                }
            }

            setTimeout(function () {
                backgroundParent(number);
                switchImage(dir);
                carousel();
            }, 250);
        }

        /**
         * Function for switch images of divs
         * @param dir
         */
        function switchImage(dir) {
            for(let image of images) {
                for(let item of array) {
                    if(image.style.backgroundImage ===  'url("' + item + '")') {
                        let index = array.indexOf(item);
                        if(dir === "left") {
                            if(index < (array.length - 1)) {
                                image.style.backgroundImage = "url('" + array[index + 1] + "')";
                            }
                            else {
                                image.style.backgroundImage = "url('" + array[0] + "')";
                            }
                        }
                        else if(dir === "right"){
                            if(index > 0) {
                                image.style.backgroundImage = "url('" + array[index - 1] + "')";
                            }
                            else {
                                image.style.backgroundImage = "url('" + array[array.length - 1] + "')";
                            }
                        }

                        break;
                    }
                }
            }
        }

        /**
         * Function for debug image switch
         */
        function backgroundParent() {
            for(let image of images) {
                image.style.display = "none";
            }

            setTimeout(function() {
                for(let image of images) {
                    image.style.display = "initial";
                }
            }, 5);
        }
    }
}