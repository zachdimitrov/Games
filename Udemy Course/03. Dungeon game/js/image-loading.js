var carPic = document.createElement("img");
var blueCarPic = document.createElement("img");

var trackPics = [];
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

function loadImageForTrack(trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    startLoadingImages(trackPics[trackCode], fileName);
}

function loadImages() {
    var imageList = [
        { varName: carPic, thefile: "car.png" },
        { varName: blueCarPic, thefile: "car2.png" },

        { trackType: trackRoad, thefile: "track-road.png" },
        { trackType: trackWall, thefile: "track-wall.png" },
        { trackType: trackChecker, thefile: "checker.png" },
        { trackType: trackNature, thefile: "nature.png" },
        { trackType: trackFlag, thefile: "flag.png" },
    ];

    picsToLoad = imageList.length;

    for (let i = 0; i < picsToLoad; i++) {
        if (imageList[i].varName != undefined) {
            startLoadingImages(imageList[i].varName, imageList[i].thefile);
        } else {
            loadImageForTrack(imageList[i].trackType, imageList[i].thefile);
        }
    }
}