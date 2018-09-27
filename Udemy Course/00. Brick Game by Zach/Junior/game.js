const brickW = 80;
const brickH = 30;

let levels = [
    [
        [5, 0, 3, 0, 1, 1, 0, 3, 0, 5],
        [0, 4, 0, 1, 2, 2, 1, 0, 4, 0],
        [3, 0, 1, 2, 3, 3, 2, 1, 0, 3],
        [0, 1, 2, 3, 4, 4, 3, 2, 1, 0],
        [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
        //[0, 1, 2, 3, 4, 4, 3, 2, 1, 0],
        //[3, 0, 1, 2, 3, 3, 2, 1, 0, 3],
        //[0, 4, 0, 1, 2, 2, 1, 0, 4, 0],
        //[5, 0, 3, 0, 1, 1, 0, 3, 0, 5],
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [2, 1, 0, 0, 0, 0, 0, 0, 1, 2],
        [3, 2, 1, 0, 0, 0, 0, 1, 2, 3],
        [4, 3, 2, 1, 0, 0, 1, 2, 3, 4],
        [5, 4, 3, 2, 1, 1, 2, 3, 4, 5],
        //[4, 3, 2, 1, 0, 0, 1, 2, 3, 4],
        //[3, 2, 1, 0, 0, 0, 0, 1, 2, 3],
        //[2, 1, 0, 0, 0, 0, 0, 0, 1, 2],
        //[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    ],
    [
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 2, 2, 2, 2, 1, 0, 0],
        [0, 1, 2, 3, 3, 3, 3, 2, 1, 0],
        [1, 2, 3, 4, 0, 0, 4, 3, 2, 1],
        [2, 3, 4, 5, 0, 0, 5, 4, 3, 2],
        //[1, 2, 3, 4, 0, 0, 4, 3, 2, 1],
        //[0, 1, 2, 3, 3, 3, 3, 2, 1, 0],
        //[0, 0, 1, 2, 2, 2, 2, 1, 0, 0],
        //[0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    ]
];

let brickGrid = [];
let brickCount = 0;

const brickColors = [
    ["#0066ff", "#33ccff", "#99ffcc", "#ccccff", "#cc66ff"],
    ["#00ffff", "#66ff99", "#66ff33", "#ccff33", "#ffff00"],
    ["#8C9EFF", "#B388FF", "#D500F9", "#F50057", "#FF5252"],
];

const brickFromTop = 30;
const brickOffset = 1;

const ballColor = "orange"; //"#EEFF41";
const backgroundColor = "black";
const paddleColor = "orange";

const paddleWidth = 250;
const paddleHeight = 10;
let paddleOffset = paddleHeight * 4;
let paddleX = 400;
let paddleY = 600 - paddleOffset;

const ballSize = 15;
let ballX = paddleX + paddleWidth / 2;
let ballSpeedX = 5;
let ballY = 552;
let ballSpeedY = -7;
let canvas,
    context,
    menuElement,
    scoreElement,
    levelElement,
    timeElement,
    livesElement,
    screenElement,
    greetingElement,
    gameOverElement,
    loseElement,
    winElement,
    showPointsElement,
    showTimeElement,
    showScoreElement;

let mouseX = 0;
let mouseY = 0;
let started = false;
let menuMode = true;
let win = false;

const framesPerSecond = 30;

let points = 0;
let level = 0;
let time = 0;
let lives = 3;

function loadStarMenu() {
    canvas.style.display = "none";
    gameOverElement.style.display = "none";
    menuElement.style.display = "none";
}

function startGame() {
    canvas.style.display = "block";
    menuElement.style.display = "block";
    screenElement.style.display = "none";
    greetingElement.style.display = "none";
    gameOverElement.style.display = "none";
}

function endGame() {
    canvas.style.display = "none";
    menuElement.style.display = "none";
    screenElement.style.display = "block";
    gameOverElement.style.display = "block";
    console.log(win);
    if (win) {
        loseElement.style.display = "none";
        winElement.style.display = "block";
    } else {
        winElement.style.display = "none";
        loseElement.style.display = "block";
    }

    showTimeElement.innerText = Math.round(time);
    showPointsElement.innerText = points;
    showScoreElement.innerText = Math.round(points / time * 1000);
}

function loadLevel(level) {
    brickGrid = levels[level].map(arr => arr.slice());
}

function updateMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
    paddleX = mouseX - paddleWidth / 2;
}

window.onload = function() {
    canvas = document.getElementById("game-canvas");
    menuElement = document.querySelector(".menu");
    scoreElement = document.querySelector(".score");
    levelElement = document.querySelector(".level");
    timeElement = document.querySelector(".time");
    livesElement = document.querySelector(".lives");

    screenElement = document.getElementById("screen");
    greetingElement = document.getElementById("greeting");
    gameOverElement = document.getElementById("game-over");
    loseElement = document.getElementById("lost-text");
    winElement = document.getElementById("win-text");
    showPointsElement = document.getElementById("show-points");
    showTimeElement = document.getElementById("show-time");
    showScoreElement = document.getElementById("show-score");

    if (menuMode) {
        loadStarMenu();
    }
    context = canvas.getContext("2d");

    setInterval(updateAll, 1000 / framesPerSecond);

    canvas.addEventListener("mousemove", updateMousePos);
    loadLevel(level);
    canvas.addEventListener("click", () => {
        if (!started) {
            startBall();
        }
    });
}

function updateAll() {
    moveAll();
    drawAll();
}

function ballReset() {
    ballSpeedX = 0;
    ballSpeedY = 0;
}

function startBall() {
    ballSpeedY = -7 - 2 * level;
    started = true;
}

function collideWithRect(top, bottom, left, right) {
    return ballY + ballSize > top && ballY - ballSize < bottom && ballX + ballSize > left && ballX - ballSize < right
}

function changeDirection(top, bottom, left, right) {
    let oldBallY = ballY - ballSpeedY;
    let oldBallX = ballX - ballSpeedX;

    if (oldBallY + ballSize > top && oldBallY - ballSize < bottom) { ballSpeedX *= -1 } else { ballSpeedY *= -1 }
}

function moveBall() {
    if (!started) {
        ballX = paddleX + paddleWidth / 2;
        ballY = paddleY - ballSize;
    } else {
        ballX += ballSpeedX;
        ballY += ballSpeedY;
    }

    if ((ballX > canvas.width - ballSize && ballSpeedX > 0) || (ballX < ballSize && ballSpeedX < 0)) {
        ballSpeedX *= -1;
    }

    if (ballY < ballSize) {
        ballSpeedY *= -1;
    }

    if (ballY > canvas.height - ballSize) {
        ballReset();
        lives--;

        if (lives == 0) {
            win = false;
            endGame();
            level = 0;
            lives = 3;
            points = 0;
            time = 0;
            loadLevel(level);
        }
        started = false;
    }
}

function paddleBallMove() {
    let paddleTopEdgeY = canvas.height - paddleOffset;
    let paddleBottomEdgeY = paddleTopEdgeY + paddleHeight;
    let paddleLeftEdgeX = paddleX;
    let paddleRightEdgeX = paddleLeftEdgeX + paddleWidth;

    if (collideWithRect(paddleTopEdgeY, paddleBottomEdgeY, paddleLeftEdgeX, paddleRightEdgeX)) {

        ballSpeedY *= -1;

        let centerOfPaddleX = paddleX + paddleWidth / 2;
        let ballDistFromPaddleCenter = ballX - centerOfPaddleX;
        ballSpeedX = ballDistFromPaddleCenter * 0.10;
    }
}

function moveAll() {
    time += 1 / 30;

    moveBall();
    paddleBallMove();

    checkIfHitBricks();
    scoreElement.innerText = points;
    timeElement.innerText = Math.round(time);
    livesElement.innerText = lives;
}

function checkIfHitBricks() {
    for (let i = 0; i < brickGrid.length; i++) {
        const brickRow = brickGrid[i];
        for (let j = 0; j < brickRow.length; j++) {
            let brick = brickRow[j];
            if (brick) {
                let brickTopEdgeY = brickFromTop + brickH * i;
                let brickBottomEdgeY = brickFromTop + brickH * (i + 1) - brickOffset;
                let brickLeftEdgeX = brickW * j;
                let brickRightEdgeX = brickW * (j + 1) - brickOffset;

                if (collideWithRect(brickTopEdgeY, brickBottomEdgeY, brickLeftEdgeX, brickRightEdgeX)) {

                    points++;
                    brickRow[j] = 0;
                    brickCount--;
                    if (brickCount == 0) {
                        started = false;
                        level++;
                        if (level >= levels.length) {
                            level = 0;
                            win = true;
                            endGame();
                        }
                        loadLevel(level);
                    }
                    changeDirection(brickTopEdgeY, brickBottomEdgeY, brickLeftEdgeX, brickRightEdgeX);
                }
            }
        }
    }
}

function drawBricks() {
    brickCount = 0;
    for (let j = 0; j < brickGrid.length; j++) {
        const brickRow = brickGrid[j];
        for (let i = 0; i < brickRow.length; i++) {
            if (brickRow[i]) {
                brickCount++;
                colorRect(brickW * i, brickH * j + brickFromTop, brickW - brickOffset, brickH - brickOffset, brickColors[level][brickRow[i] - 1]);
            }
        }
    }
}

function drawAll() {
    colorRect(0, 0, canvas.width, canvas.height, backgroundColor); // clear
    colorCircle(ballX, ballY, ballSize, ballColor); // draw ball
    paddleY = canvas.height - paddleOffset;
    colorRect(paddleX, canvas.height - paddleOffset, paddleWidth, paddleHeight, paddleColor); // clear
    drawBricks();
    levelElement.innerText = level + 1;
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    context.fillStyle = fillColor;
    context.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    context.fillStyle = fillColor;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    context.fill();
}