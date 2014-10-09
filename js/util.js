var util = {
    getRequest: function(url, callback) {
        var request = new XMLHttpRequest(); 
        request.onreadystatechange = function() {
            if(request.readyState === 4) {
                if (request.status === 200) {
                    callback(null, request.responseText);
                } else {
                    callback(request.status, null);
                }
            }
        };
        request.open("GET", url, true);
        request.send(null);
    }
};

