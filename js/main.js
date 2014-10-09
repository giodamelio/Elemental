document.addEventListener("DOMContentLoaded", function(){
    // Create our map
    var map = new Map();

    // Load first map
    map.loadMap("/maps/1.json", function(err) {
        if (err) {
            throw err;
        }
        console.log("Map loaded");
    });
});

