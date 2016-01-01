var express = require('express');

var app = new express();

app.get('/', function(req, res){
	res.render('./../app/views/index.ejs',{});
})
.use(express.static(__dirname, + '/../app'))
.listen(7777);