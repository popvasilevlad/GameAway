var express = require('express');

var bodyParser = require('body-parser')
var path = require('path');
var app = express();

app.get('/data', function (req, res) {
 return res.send({
 		room_id: '#ASD@'
 	}
 );
});


app.listen(process.env.PORT || 8080, function() {
	console.log('Listening on port 8080')
});




