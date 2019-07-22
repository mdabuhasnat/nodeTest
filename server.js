var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, ()=> {
    console.log('server is running');
});

app.get('/ahasan', function (req, res) {
    res.send('Hello ahasan');
});
