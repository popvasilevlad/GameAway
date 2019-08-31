// let entries = [{
// 	result: 20
// },
// {
// 	added_value: -1,
// 	formula: '3 -1',
// 	result: '2'
// }];
var states = require('./states.js');

let data = {
	game_room_id: 1,
	game_room_title: 'Scoober team',
	game_room_subtitle: 'Win the game or win the job'
};

module.exports = {
	joinAvaiableRoom: function(socket) {
		const roomName = availableGameRoomsArray[0];
				
		gameRooms[roomName].player_2 = socket.id;
		availableGameRoomsArray.shift();

		return gameRooms[roomName];
	},
	createRoom: function(socket) {
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
}