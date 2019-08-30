var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(process.env.PORT || 8080, function() {
	console.log('Listening on port 8080')
});

// let entries = [{
// 	result: 20
// },
// {
// 	added_value: -1,
// 	formula: '3 -1',
// 	result: '2'
// }];

let data = {
	game_room_id: 1,
	game_room_title: 'Scoober team',
	game_room_subtitle: 'Win the game or win the job'
};

const gameRoomsArray = [];
const availableGameRoomsArray = [];
const gameRooms = {};

var io = socket(server);


function joinAvaiableRoom(socket) {
	const roomName = availableGameRoomsArray[0];
			
	gameRooms[roomName].player_2 = socket.id;
	availableGameRoomsArray.shift();

	return gameRooms[roomName];
}

function createRoom(socket) {
	console.log('create room func')
	let room = {
		roomId: Math.floor(Math.random() * 1000), //check duplicates
		player_1: socket.id,
		last_edit: socket.id,
		entries: [{
			result: Math.floor(Math.random() * 100)
		}],
		...data
	};
	availableGameRoomsArray.push(room.roomId);
	gameRooms[room.roomId] = room;
	gameRoomsArray.push(room.roomId);


	return room;
}


io
.of('/games')
.on('connection', function(socket) {
	console.log('\n\n============================================= \n');
	socket.on('find_room', function() {
		let room;

		if (!availableGameRoomsArray.length) {
			room = createRoom(socket);
			socket.join(room.roomId);

			io.of('/games').in(room.roomId).emit('create_room_success', room);
		} else {
			room = joinAvaiableRoom(socket);
			socket.join(room.roomId);

			io.of('/games').in(room.roomId).emit('find_room_success', room);
		}

		
	})


	socket.on('join_room', function(roomId) {
		if (gameRoomsArray.includes(parseInt(roomId))) {
			socket.join(roomId);
			io.of('/games').in(roomId).emit('join_room_success', gameRooms[roomId]);
		} else {
			socket.emit('find_room_fail');
		}
	});
	console.log('--------------------- gameRoomsArray = ', gameRoomsArray);
	console.log('--------------------- gameRooms = ', gameRooms);
});

