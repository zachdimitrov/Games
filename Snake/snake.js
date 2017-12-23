var snakes = (function() {
    var snakePartSize = 15;

    function GameObject(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    GameObject.prototype = {
        getPosition: function() {
            return {
                x: this.x,
                y: this.y
            }
        },
        getSize: function() {
            return this.size;
        }
    };

    function SnakePart(x, y, size) {
        GameObject.call(this, x, y, size);
    }

    SnakePart.prototype = new GameObject();
    SnakePart.prototype.constructor = SnakePart;
    SnakePart.prototype.changePosition = function(x, y) {
        this.x = x;
        this.y = y;
    }

    function Snake(x, y, size) {
        var part = null
        var partX, partY, size = 5;

        this.parts = [];
        for (let i = 0; i < size; i += 1) {
            partX = x - i * snakePartSize;
            partY = y;
            part = new SnakePart(partX, partY, snakePartSize);
            this.parts.push(part);
        }
    }

    Snake.prototype = new GameObject();
    Snake.prototype.constructor = Snake;

    function Wall(x, y, size) {
        GameObject.call(this, x, y, size);
    }

    Wall.prototype = new GameObject();
    Wall.prototype.constructor = Wall;

    function Food(x, y, size) {
        GameObject.call(this, x, y, size);
    }

    Food.prototype = new GameObject();
    Food.prototype.constructor = Food;

    return {
        get: function(x, y, size) {
            return new Snake(x, y, size);
        }
    };
})();