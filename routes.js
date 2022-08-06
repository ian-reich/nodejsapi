'use strict';
module.exports = function (app) {
    var jsonku = require('./controller');

    // Index URL Path 
    app.route('/')
        .get(jsonku.index);
        // Get All Data 
    app.route('/getalldata')
        .get(jsonku.getAllData);
        // Get BY ID 
    app.route('/getbyid/:id_komik')
        .get(jsonku.getByID)
    // Save Data
    app.route('/savedata')
        .post(jsonku.saveData);
    // Rubah Data 
    app.route('/updatedata')
        .put(jsonku.updateData);
    // Hapus Data 
    app.route('/deletedata')
        .delete(jsonku.deleteData);
};