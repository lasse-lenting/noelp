var number = 0
function load(){
    number++;
    if (number > 15) {
        number = 0;
        load()
    }
    changeTitle(number);
}
function changeTitle(number){
    if (number == 1) {
        document.title = "\\";
    }
    if (number == 2) {
        document.title = "/";
    }
    if (number == 3) {
        document.title = "N\\";
    }
    if (number == 4) {
        document.title = "N/";
    }
    if (number == 5) {
        document.title = "No\\";
        document.getElementById("loads").style.animationPlayState='Paused';
    }
    if (number == 6) {
        document.title = "No/";
    }
    if (number == 7) {
        document.title = "Noe\\";
        document.getElementById("loads").style.animationPlayState='Running';
    }
    if (number == 8) {
        document.title = "Noe/";
    }
    if (number == 9) {
        document.title = "Noel\\";
    }
    if (number == 10) {
        document.title = "Noel/";
    }
    if (number == 11) {
        document.title = "NoelP\\";
    }
    if (number == 12) {
        document.title = "NoelP/";
    }
    if (number == 13) {
        document.title = "NoelP";
    }
    if (number == 14) {
        document.title = "NoelP";
    }
    if (number == 15) {
        document.title = "NoelP";
    }
    
}

function redirect() {
    window.location = "/invite"
}

