var carPic = document.createElement("img");
var wallPic = document.createElement("img");
var roadPic = document.createElement("img");
var checkerPic = document.createElement("img");
var naturePic = document.createElement("img");
var flagPic = document.createElement("img");

var picsToLoad = 0;

function countLoadedImages() {
    picsToLoad--;

    if (picsToLoad == 0) {
        startGame();
    }
}

function startLoadingImages(imgVar, fileName) {
    imgVar.onload = countLoadedImages;
    imgVar.src = "./assets/" + fileName;
}

function loadImages() {
    var imageList = [
        { varName: carPic, thefile: "car.png" },
        { varName: roadPic, thefile: "track-road.png" },
        { varName: wallPic, thefile: "track-wall.png" },
        { varName: naturePic, thefile: "nature.png" },
        { varName: checkerPic, thefile: "checker.png" },
        { varName: flagPic, thefile: "flag.png" }
    ];

    picsToLoad = imageList.length;

    for (let i = 0; i < picsToLoad; i++) {
        const data = imageList[i];
        startLoadingImages(data.varName, data.thefile);
    }
}