var renderers = (function() {

    function CnavasRenderer(selector) {

    }

    return {
        getCanvas: function() {
            return new CanvasRenderer();
        }
    }
}());