let canvas, context;
let ballX = 50;
let ballY = 100;
let ballSize = 20;

let paddle1X = 20;
let paddle1Y = 200;

let paddle2X = 770;
let paddle2Y = 200;

let paddleThickness = 10;
let paddleHeight = 100;

let speedX = 10;
let speedY = 5;

window.onload = function() {
    canvas = document.getElementById("game");
    context = canvas.getContext("2d");

    const framesPerSecond = 30;
    setInterval(() => {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);

    document.addEventListener("keydown", keyPressed);
    canvas.addEventListener("mousemove", function(evt) {
        let mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y - paddleHeight / 2;
    });
}

function keyPressed(evt) {
    if (evt.keyCode == 38 && paddle1Y > 0) {
        paddle1Y -= 15;
    }

    if (evt.keyCode == 40 && paddle1Y < canvas.height - paddleHeight) {
        paddle1Y += 15;
    }
}

function calculateMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

function moveEverything() {
    ballX += speedX;
    ballY += speedY;

    if (ballX <= paddle1X + paddleThickness + ballSize / 2 &&
        (ballY > paddle1Y && ballY < paddle1Y + paddleHeight)) {
        speedX *= -1;
    }

    if (ballX <= 0) { ballReset(); }
    if (ballX > canvas.width - ballSize) { speedX *= -1 }
    if (ballY > canvas.height - ballSize || ballY == 0) { speedY *= -1 }
}

function colorRect(leftX, topY, width, height, drawColor) {
    context.fillStyle = drawColor;
    context.fillRect(leftX, topY, width, height);
}

function colorCircle(centerX, centerY, diameter, drawColor) {
    context.fillStyle = drawColor;
    context.beginPath();
    context.arc(centerX, centerY, diameter / 2, 0, Math.PI * 2, true);
    context.fill();
}

function drawEverything() {
    colorRect(0, 0, canvas.width, canvas.height, "black");
    colorRect(paddle1X, paddle1Y, paddleThickness, paddleHeight, "white");
    colorRect(canvas.width - paddle1X - paddleThickness, paddle2Y, paddleThickness, paddleHeight, "white");
    colorCircle(ballX, ballY, ballSize, "red");
}

function ballReset() {
    speedX *= -1;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}