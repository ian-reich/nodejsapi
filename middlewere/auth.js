var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

// Controller Registrasi 
exports.register = function(req, res){
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(eq.body.password),
        role: req.body.role,
        tanggal: new Date()
    }

    // Query Cek EMail 
    var queryCekEmail = "SELECT * FROM ?? WHERE ??";
    var table = ["user", "email", post.email];
    exeQueryCekEmail = mysql.format(queryCekEmail, table);
    connection.query(exeQueryCekEmail, function(error, rows, fields){
        if (error) {
            console.log(error)
        } else {
            if(rows.length == 0){
                var queryRegister = "INSERT INTO ?? SET ??";
                var tableRegister = ["user"];
                exeQueryRegister = mysql.format(queryRegister, tableRegister);
                connection.query(exeQueryRegister, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Register Sukses", res);
                    }
                });
            }else{
                response.ok("Email Sudah Terdaftar", res);
            }
        }
    });
}