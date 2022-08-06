'use-strict';
var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API Berhasil Dijalankan", res);
}
// Fecth All Data 
exports.getAllData = function(req,res){
    connection.query("SELECT * FROM tm_komik", function(error, rows, fields){
        if (error) {
            connection.log(error)
        } else {
            response.ok(rows, res);
        }
    });
};
