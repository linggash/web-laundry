var mysql = require('mysql');

// buat koneksi database

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'db-web-laundry',
});

 conn.connect((err) =>{
     if(err) throw err;
     console.log('Mysql terkoneksi')
 });

 module.exports = conn;