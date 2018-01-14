var games = (function() {
    var theSnake, theRenderer, theFood;

    function Game(renderer) {
        this.renderer = renderer;
        this.snake = new snakes.get(100, 100, 5);
        this.food = new snakes.getFood(260, 100, 15);
        this.bindKeyEvents();
        this.state = "stopped";
    }

    function animationFrame() {
        var snakePosition = theSnake.getPosition();
        var toChangePosition = false;
        var newX = snakePosition.x;
        var newY = snakePosition.y;

        if (snakePosition.x < dimensions.minWidth) {
            newX = dimensions.maxWidth;
            toChangePosition = true;
        } else if (dimensions.maxWidth < snakePosition.x) {
            newX = dimensions.minWidth;
            toChangePosition = true;
        }
        if (snakePosition.y < dimensions.minHeight) {
            newY = dimensions.maxHeight;
            toChangePosition = true;
        }
        if (dimensions.maxHeight < snakePosition.y) {
            newY = dimensions.minHeight;
            toChangePosition = true;
        }
        if (toChangePosition) {
            theSnake.changePosition(newX, newY);
        }

        theRenderer.clear();
        theSnake.move();
        theRenderer.draw(theSnake);
        theRenderer.draw(theFood);

        if (theGame.state === "running") {
            requestAnimationFrame(animationFrame);
        }
    }

    var dimensions;
    Game.prototype = {
        start: function() {
            theGame = this;
            theSnake = this.snake;
            theRenderer = this.renderer;
            theFood = this.food;
            requestAnimationFrame(animationFrame);
            dimensions = this.renderer.getDimensions();
            this.state = "running";
        },
        stop: function() {
            theGame.state = "stopped";
        },
        bindKeyEvents: function() {
            var self = this;
            document.body.addEventListener("keydown", function(ev) {
                var keyCode = ev.keyCode;
                if (37 <= keyCode && keyCode <= 40) {
                    self.snake.changeDirection(keyCode - 37);
                }
            });
        }
    }

    return {
        get: function(renderer) {
            return new Game(renderer);
        }
    }
}());