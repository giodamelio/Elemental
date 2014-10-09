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

    // Draw a redrectangle
    self.context.fillStyle = "rgb(255,0,0)";
    self.context.fillRect(10, 10, 25, 25);
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

