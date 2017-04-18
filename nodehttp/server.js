var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
/*
app.get('/base', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/base.html'));
});*/
/*
app.get('/', function (req, res) {
    res.render('index');
});*/
app.listen(3000, function () {
    console.log("Server is running at 3000 port.");
})