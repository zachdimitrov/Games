let canvas, context;

window.onload = function() {
    canvas = document.getElementById("game");
    context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
}