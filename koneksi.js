var mysql = require('mysql');
// koneksi database 
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'dbadmin',
    database:'dbbook'
});
conn.connect((err)=>{
    if (err) throw err;
    console.log('koneksi sukses');
});
module.exports = conn;