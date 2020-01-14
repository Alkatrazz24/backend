const path = require('path');
const {engine}= require('express-edge');
const express = require('express');
const mysql = require('mysql');
const{promisify}= require('util');
const bodyParser = require('body-parser');
const session = require('express-session');
const con = require("./config");


const app = express();


var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var createController=require('./controllers/create-controller');

app.use(express.static('public'));
app.use(engine);
app.set('views',__dirname+'/views');


app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));









app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/login.html'));
});

app.get('/login.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/login.html'));
});

app.get('/inscription.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/inscription.html'));
});

app.get('/index.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'));
});

app.get('/about.html',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'));
});
app.get('/create.html',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/create.html'));
});



app.get('/admin.html',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/admin.html'));
});

app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/create',createController.create);


console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.post('/controllers/create-controller', createController.create);

app.post('/create.html',(req,res) =>{
    console.log(req.body);
    res.redirect('/admin.html')
});

app.listen(8080,()=> {
    console.log('Le site est up')
});

module.exports= app;