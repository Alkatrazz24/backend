var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:"mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database créee ou chargée");
  });
  var sql = "CREATE TABLE IF NOT EXISTS users (id int(11) not null AUTO_INCREMENT, name varchar(255) not null, email varchar(255) not null, password varchar(255) not null, PRIMARY KEY (id) ) ENGINE=InnoDB AUTO_INCREMENT=8"
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log("table users créee ou chargée");
    });
   con.query("SELECT * FROM users",function(err,result,fields) {
   if(err) throw err;
   console.log(result);
   });



  var sql2= ("CREATE TABLE IF NOT EXISTS post (id int (11) not null AUTO_INCREMENT, title varchar(255) not null, description varchar(255) not null, content varchar(255) not null, PRIMARY KEY (id) ) ENGINE=InnoDB AUTO_INCREMENT=8")
  con.query(sql2, function(err,result){
  if (err) throw err;
  console.log("table post crée ou chargé");
  });
  con.query("SELECT * FROM post",function(err,result,fields) {
     if(err) throw err;
     console.log(result);
     });
  });

