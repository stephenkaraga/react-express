var express = require('express');
var path = require('path');
var parser = require('body-parser');
var app = new express();
const appPath = path.resolve(__dirname, '../.tmp');
var React = require('react/addons');

var GroceryItem = require('./models/GroceryItem.js');

require("babel/register")
require('./database.js');

app.get('/', function(req, res){
	// res.render('./../app/views/index.ejs',{})
	var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

	GroceryItem.find(function(err,docs){
		var generated = React.renderToString(application({
			items:docs
		}));

		res.render('./../app/views/index.ejs',{reactOutput:generated});
	})

})

.use(express.static(appPath))

.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);