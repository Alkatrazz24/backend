var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});


module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    con.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
            })
        }else{

            if(results.length >0){
                if(password==results[0].password){
                    if(email=="aliyesilkaya93@gmail.com")
                        {
                            req.session.user_id=results[0].id;
                            req.session.user=results[0];
                            console.log(results[0].id);
                            res.redirect('/admin.html');}
                    else{
                        req.session.user_id=results[0].id;
                        req.session.user=results[0];
                        console.log(results[0].id);
                        res.redirect('/index.html');
                    }
                }

                else{
                    res.status(400).send({
                        message: "wrong email or password"
                    });
                }

            }
            else{
                res.json({
                    status:false,
                    message:"Email does not exits"
                });
            }
        }
    });
};