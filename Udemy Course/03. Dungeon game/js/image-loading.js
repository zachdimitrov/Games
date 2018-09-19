var heroPic = document.createElement("img");

var worldPics = [];
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

function loadImageForWorld(worldCode, fileName) {
    worldPics[worldCode] = document.createElement("img");
    startLoadingImages(worldPics[worldCode], fileName);
}

function loadImages() {
    var imageList = [
        { varName: heroPic, thefile: "hero.png" },
        { worldType: worldRoad, thefile: "world-road.png" },
        { worldType: worldWall, thefile: "world-wall.png" },
        { worldType: worldChecker, thefile: "checker.png" },
        { worldType: worldNature, thefile: "nature.png" },
        { worldType: worldFlag, thefile: "flag.png" },
    ];

    picsToLoad = imageList.length;

    for (let i = 0; i < picsToLoad; i++) {
        if (imageList[i].varName != undefined) {
            startLoadingImages(imageList[i].varName, imageList[i].thefile);
        } else {
            loadImageForWorld(imageList[i].worldType, imageList[i].thefile);
        }
    }
}