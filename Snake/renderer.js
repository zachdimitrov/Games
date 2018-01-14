/// <reference path="snake.js" />

var renderers = (function() {

    var drawSnake = function(canvas, snake) {
        for (let i = 0; i < snake.parts.length; i += 1) {
            drawSnakePart(canvas, snake.parts[i]);
        }
    };

    var drawSnakePart = function(canvas, part) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "orange";
        ctx.strokeStyle = "black";
        var position = part.getPosition();
        ctx.fillRect(position.x, position.y, part.size, part.size);
        ctx.strokeRect(position.x, position.y, part.size, part.size);
    };

    var drawFood = function(canvas, food) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "lightgreen";
        ctx.strokeStyle = "black";
        var position = food.getPosition();
        ctx.fillRect(position.x, position.y, food.size, food.size);
        ctx.strokeRect(position.x, position.y, food.size, food.size);
    };

    var drawWall = function(canvas, wall) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.strokeStyle = "black";
        var position = wall.getPosition();
        ctx.fillRect(position.x, position.y, wall.size, wall.size);
        ctx.strokeRect(position.x, position.y, wall.size, wall.size);
    };

    function CanvasRenderer(selector) {
        if (selector instanceof HTMLCanvasElement) {
            this.canvas = selector;
        } else if (typeof selector === "string" || typeof selector === "String") {
            this.canvas = document.querySelector(selector);
        }
    }

    CanvasRenderer.prototype = {
        draw: function(obj) {
            if (obj instanceof snakes.SnakeType) {
                drawSnake(this.canvas, obj);
            } else if (obj instanceof snakes.SnakePartType) {
                drawSnakePart(this.canvas, obj);
            } else if (obj instanceof snakes.WallType) {
                drawWall(this.canvas, obj);
            } else if (obj instanceof snakes.FoodType) {
                drawFood(this.canvas, obj);
            }
        },
        clear: function() {
            var ctx = this.canvas.getContext("2d");
            var w = this.canvas.width;
            var h = this.canvas.height;
            ctx.clearRect(0, 0, w, h);
        },
        getDimensions: function() {
            return {
                minWidth: 0,
                maxWidth: this.canvas.width,
                minHeight: 0,
                maxHeight: this.canvas.height
            };
        }
    }

    return {
        getCanvas: function(selector) {
            return new CanvasRenderer(selector);
        }
    }
}());