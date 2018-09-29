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

let player1score = 0;
let player2score = 0;
let winScore = 3;

let enemySpeed = 12;
let showWinScreen = false;

window.onload = function() {
    canvas = document.getElementById("game");
    context = canvas.getContext("2d");

    const framesPerSecond = 30;
    setInterval(() => {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);

    document.addEventListener("keydown", keyPressed);

    canvas.addEventListener("mousedown", handleMouseClick);
    canvas.addEventListener("mousemove", function(evt) {
        let mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y - paddleHeight / 2;
    });
}

function handleMouseClick(evt) {
    if (showWinScreen) {
        player1score = 0;
        player2score = 0;
        showWinScreen = false;
    }
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

function computerMovement() {
    if (paddle2Y + paddleHeight / 2 < ballY - paddleHeight / 3) {
        paddle2Y += enemySpeed;
    } else if (paddle2Y + paddleHeight / 2 > ballY + paddleHeight / 3) {
        paddle2Y -= enemySpeed;
    }
}

function moveEverything() {
    if (showWinScreen) {
        return;
    }

    computerMovement();

    ballX += speedX;
    ballY += speedY;

    if (ballX < paddle1X + paddleThickness + ballSize) {
        if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
            speedX *= -1;
            let deltaY = ballY - (paddle1Y + paddleHeight / 2);
            speedY = deltaY * 0.35;
        } else if (ballX <= ballSize / 2) {
            player2score++;
            ballReset();
        }
    }

    if (ballX >= paddle2X - ballSize / 2) {
        if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
            speedX *= -1;
            let deltaY = ballY - (paddle2Y + paddleHeight / 2);
            speedY = deltaY * 0.35;
        } else if (ballX >= canvas.width - ballSize / 2) {
            player1score++;
            ballReset();
        }
    }

    if (ballY >= canvas.height - ballSize || ballY <= 0) { speedY *= -1 }
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

function drawNet() {
    for (let i = 0; i < canvas.height; i += 30) {
        colorRect(canvas.width / 2 - 1, i, 2, 12, "white");
    }
}

function drawEverything() {
    colorRect(0, 0, canvas.width, canvas.height, "black");
    if (showWinScreen) {
        context.fillStyle = "white";
        let player = player1score > player2score ? "ЛЕВИЯ" : "ДЕСНИЯ";
        context.font = "30px Arial";
        context.fillText(player + " ИГРАЧ ПОБЕДИ!", 230, 200);
        context.font = "20px Arial";
        context.fillText("ЩРАКНЕТЕ ЗА НОВА ИГРА!", 270, 250);
        return;
    }

    drawNet();
    colorRect(paddle1X, paddle1Y, paddleThickness, paddleHeight, "cyan");
    colorRect(canvas.width - paddle1X - paddleThickness, paddle2Y, paddleThickness, paddleHeight, "orange");
    colorCircle(ballX, ballY, ballSize, "yellowgreen");

    context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText(player1score, 200, 100);
    context.fillText(player2score, canvas.width - 200, 100);
}

function ballReset() {
    if (player1score >= winScore || player2score >= winScore) {
        showWinScreen = true;
    }

    let tempSpeedX = speedX;
    let tempSpeedY = speedY;

    speedX = 0;
    speedY = 0;

    ballX = canvas.width / 2;
    ballY = canvas.height / 2;

    setTimeout(() => {
        speedX = tempSpeedX * -1;
        speedY = tempSpeedY;
    }, 1500);
}