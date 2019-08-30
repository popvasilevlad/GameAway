import io from 'socket.io-client';
import store from '../store';
import { fetchData } from '../actions';
import cookie from 'react-cookies';

let socket = io.connect('http://localhost:8080/games');

const clientSessionId = cookie.load('clientSessionId');
const roomId = cookie.load('roomId');

if(!roomId) {
	socket.emit('find_room');
} else {
	socket.emit('join_room', roomId);
}

socket.on('create_room_success', data => {
	if (cookie.load('clientSessionId')) return false;

	cookie.save('roomId', data.roomId, { path: '/'});
	cookie.save('clientSessionId', data.player_1, { path: '/'});
	store.dispatch(fetchData(data));
});
 
socket.on('find_room_success', data => {
	if (cookie.load('clientSessionId')) return false;

	cookie.save('roomId', data.roomId, { path: '/'});
	cookie.save('clientSessionId', data.player_2, { path: '/'});
	store.dispatch(fetchData(data));
});

socket.on('join_room_success', data => {
	console.log('join_room_success', data);
	store.dispatch(fetchData(data));
});

socket.on('find_room_fail', () => {
	console.log('find_room_fail');
});

export default socket;
// const socket = io.connect(`http://localhost:8080?clientSessionId=${clientSessionId}&&roomId=${roomId}`);