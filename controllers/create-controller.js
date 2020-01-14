var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});
module.exports.create=function(req,res) {
    var post={
        "title":req.body.title,
        "description":req.body.description,
        "content":req.body.content,
    };
    con.query('INSERT INTO post SET ?',post, function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else
        {
            res.redirect('/admin.html');
        }
    });
    var query = con.query('SELECT * FROM post',function(err,rows){
        if(err)
            console.log(err);

    });
};
