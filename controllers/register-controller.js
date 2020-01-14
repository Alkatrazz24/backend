var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});
module.exports.register=function(req,res){
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
    };
    con.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else
            {
                res.redirect('/login.html');
        }
    });
};
