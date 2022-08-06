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
// GetByID Data
exports.getByID = function(req,res){
    let id_komik = req.params.id_komik;
    connection.query("SELECT * FROM tm_komik WHERE id_komik = ?", [id_komik],
        function(error, rows, fields){
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        }
    );
};
// Manambahkan Data 
exports.saveData = function(req,res){
    var judul = req.body.judul;
    var slug = judul.toLowerCase().replace(" ","-");
    var penulis = req.body.penulis;
    var penerbit = req.body.penerbit;
    connection.query("INSERT INTO tm_komik(judul,slug,penulis,penerbit) VALUES(?,?,?,?)",
    [judul,slug,penulis,penerbit],
    function(error, rows,field){
        if (error) {
            console.log(error)
        } else {
            response.ok("Data Berhasil Disimpan", res);
        }
    });
};

