let counter = 0;
let started = false;
let tickInterval;
let aiPos = 150;

let walls = 0;
let avoided = 0;
let crash = 0;

const wall = document.getElementById("the-wall");
const car = document.getElementById("ai-car");
const debugArea = document.getElementById("debug-text-area");
const topDebug = document.getElementById("top-debug");
const stepsDone = document.getElementById("steps-done");
const frontSensor = document.getElementById("sensor-front");
const leftSensor = document.getElementById("sensor-left");
const rightSensor = document.getElementById("sensor-right");
const wallSpeed = 50;
const aiSpeed = 10;

function tick() {
    counter++;
    stepsDone.value = counter;
    moveWall();
    checkCollision();
}

function runSimulation(state) {
    if (state == 1 && !started) {
        tickInterval = setInterval("tick()", 1000 / 30);
        started = true;
    } else if (state == 0) {
        started = false;
        clearInterval(tickInterval);
        counter = 0;
        aiPos = 100;
        stepsDone.value = counter;
        wall.style.left = null;
        wall.style.right = "0px";
        car.style.top = "150px";

        walls = 0;
        avoided = 0;
        crash = 0;
    }
}

function moveWall() {
    let wallX = wall.offsetLeft;

    if (wallX <= 0) {
        let randomWallY = Math.floor(Math.random() * 200 + 1) + 100;
        wall.style.top = `${randomWallY}px`;
        wall.style.left = null;
        wall.style.right = "0px";
        walls++;
    } else {
        wallX -= wallSpeed;
        wall.style.left = `${wallX}px`;
    }
}

function moveCar(direction) {

    switch (direction) {
        case "up":
            aiPos -= aiSpeed;
            break;
        case "down":
            aiPos += aiSpeed;
            break;
    }

    if (aiPos < 150) {
        aiPos = 150;
    }

    if (aiPos > 300) {
        aiPos = 300;
    }

    car.style.top = `${aiPos}px`;
}

function checkCollision() {
    let wallX = wall.offsetLeft;
    let wallY = wall.offsetTop;
    let aiX = frontSensor.offsetLeft + 500;
    let aiY = car.offsetTop;

    debugArea.innerHTML += `[${counter}] wX: ${wallX} fsX: ${aiX} | wY: ${wallY} fsY: ${aiY}\n`;
    debugArea.scrollTop = debugArea.scrollHeight;

    let successRate = Math.floor(avoided / (avoided + crash) * 100);
    topDebug.innerHTML = `Avoided: ${avoided} <br/> Crash: ${crash} <br/> Success rate: ${successRate}`;

    if (wallX < aiX && wallY < aiY + 50 && wallY + 100 > aiY) {
        if (wallY < 200) {
            moveCar("down");
        } else {
            moveCar("up");
        }

        frontSensor.style.backgroundColor = "red";
        if (wallX < 100) crash++;
    } else {
        frontSensor.style.backgroundColor = "white";
        if (wallX < 100) avoided++;
    }
}