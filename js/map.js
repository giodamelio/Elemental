// Create the map
var Map = function() {
    self = this;

    // Get our canvas
    self.canvas = document.getElementById("canvas");

    // Set our canvas's width and height to that of the pages
    // and update it when the page size changes
    self.canvas.width = window.innerWidth;
    self.canvas.height = window.innerHeight;
    window.addEventListener("resize", function() {
        self.canvas.width = window.innerWidth;
        self.canvas.height = window.innerHeight;
    });

    // Get our context
    self.context = self.canvas.getContext("2d");

    // Main draw loop
    var loop = function() {
        self._drawMap();
        window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
};

// Load a map from url
Map.prototype.loadMap = function(url, callback) {
    var self = this;

    util.getRequest(url, function(err, map) {
        if (err) {
            throw err;
        }
        self.map = JSON.parse(map);
        callback();
    });
};

// Draw the map
Map.prototype._drawMap = function() {
    console.log("Drawing frame");
};

