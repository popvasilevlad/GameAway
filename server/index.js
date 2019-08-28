var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(process.env.PORT || 8080, function() {
	console.log('Listening on port 8080')
});

let entries = [{
	result: 20
},
{
	added_value: -1,
	formula: '3 -1',
	result: '2'
}];

let data = {
	game_room_id: 1,
	game_room_title: 'Scoober team',
	game_room_subtitle: 'Win the game or win the job',
	entries: entries
};


var io = socket(server);

io.on('connection', function(socket) {
	socket.on('fetch_data', function() {
		socket.emit('fetch_data_success', data);
	});
});

