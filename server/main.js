var express = require('express');
var path = require('path');
var app = new express();
const appPath = path.resolve(__dirname, '../app');
console.log(appPath)

app.get('/', function(req, res){
	res.render('./../app/views/index.ejs',{})
})

.use('/app', express.static(appPath))

.listen(7777)