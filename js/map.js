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
        // Clear map
        self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);

        // Draw map
        self._drawMap();

        // Get the next frame
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
        console.log(self.map);
        callback();
    });
};

// Draw the map
Map.prototype._drawMap = function() {
    var self = this;

    // Calculate offset's to center map
    var xOffset = (self.canvas.width - (self.map.tilesize * self.map.width)) / 2;
    var yOffset = (self.canvas.height - (self.map.tilesize * self.map.height)) / 2;

    // Draw the tiles
    for (var x = 0; x < self.map.width; x++) {
        for (var y = 0; y < self.map.height; y++) {
            var tile = self.map.map_data[x][y];
            self.context.beginPath();
            self.context.rect(
                xOffset + (x * self.map.tilesize),
                yOffset + (y * self.map.tilesize),
                self.map.tilesize,
                self.map.tilesize
            );
            self.context.fillStyle = self._tileLegend[tile.type];
            self.context.fill();
            self.context.strokeStyle = "black";
            self.context.lineWidth = 1;
            self.context.stroke();
        }
    }
};

// Tile colors
Map.prototype._tileLegend = {
    grass: "#2ECC40",
    lava: "#FF4136"
};

