'use strict';
module.exports = function (app) {
    var jsonku = require('./controller');

    // Index URL Path 
    app.route('/')
        .get(jsonku.index);
    
    // Get All Data 
    app.route('/getalldata')
        .get(jsonku.getAllData);
};