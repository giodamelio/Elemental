// Create the map
var Map = function() {
    // Get our canvas
    this.canvas = document.getElementById("canvas");

    // Set our canvas's width and height to that of the pages
    // and update it when the page size changes
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener("resize", function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    });

    // Get our context
    this.context = this.canvas.getContext("2d");

    // Draw a redrectangle
    this.context.fillStyle = "rgb(255,0,0)";
    this.context.fillRect(10, 10, 25, 25);
};

