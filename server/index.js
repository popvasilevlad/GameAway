var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(process.env.PORT || 8080, function() {
	console.log('Listening on port 8080')
});

const gameRoomsArray = [];
const availableGameRoomsArray = [];
const gameRooms = {};

var io = socket(server);

io
.of('/games')
.on('connection', function(socket) {
	const { roomId } = socket.handshake.query;
	
	let room;

	if (roomId === 'undefined') {
		if (!availableGameRoomsArray.length) {
			room = createRoom(socket);
		} else {
			room = joinAvaiableRoom(socket);
		}

		socket.join(room.roomId);
		
		io.of('/games').in(room.roomId).emit('room_connection_success', {
			data: room,
			playerId: socket.id
		});
	} else {
		if (gameRoomsArray.includes(parseInt(roomId))) {
			socket.join(parseInt(roomId));
			io.of('/games').in(roomId).emit('reconnect_to_room_success', gameRooms[roomId]);
		} else {
			socket.emit('find_room_fail');
		}
	}

	socket.on("add_value", data => {
		const roomId = Object.keys(socket.rooms)[0];

		addValue(data, roomId);
		
		io.of('/games').in(roomId).emit('added_value', {
			entries: gameRooms[roomId].entries,
			last_edit: gameRooms[roomId].last_edit
		});

		if(checkIfGameEnded(roomId)) {
			gameRooms[roomId].winner = data.playerId;
			io.of('/games').in(roomId).emit('game_over', gameRooms[roomId].winner);
		};
	});
	socket.on("disconnect", function() {console.log("Client disconnected")});
});

function checkIfGameEnded(roomId) {
	return parseInt(gameRooms[roomId].currentResult) === 1;
}

function addValue(data, roomId) {
	const { value, playerId } = data;
	const lastResult = gameRooms[roomId].currentResult;
	const newResult = parseInt((parseInt(value) + lastResult) / 3);
	const formula = `[(${value} + ${lastResult}) / 3] = ${newResult}`;

	gameRooms[roomId].entries.push({
		added_value: value,
		formula: formula,
		result: newResult,
		author: playerId
	});
	gameRooms[roomId].last_edit = playerId;
	gameRooms[roomId].currentResult = newResult;
}

function joinAvaiableRoom(socket) {
	const roomName = availableGameRoomsArray[0];
			
	gameRooms[roomName].player_2 = socket.id;
	availableGameRoomsArray.shift();

	return gameRooms[roomName];
}

function createRoom(socket) {
	const startingNumber = Math.floor(Math.random() * 100);
	let room = {
		roomId: Math.floor(Math.random() * 1000), //check duplicates & not eguals 1
		player_1: socket.id,
		last_edit: socket.id,
		entries: [{
			result: startingNumber,
			author: socket.id
		}],
		currentResult: startingNumber,
		game_room_id: 1,
		game_room_title: 'Scoober team',
		game_room_subtitle: 'Win the game or win the job'
	};
	availableGameRoomsArray.push(room.roomId);
	gameRooms[room.roomId] = room;
	gameRoomsArray.push(room.roomId);

	return room;
}