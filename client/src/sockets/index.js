import io from 'socket.io-client';
import store from '../store';
import { fetchData } from '../actions';
import cookie from 'react-cookies';

const clientSessionId = cookie.load('clientSessionId');
const roomId = cookie.load('roomId');

const socket = io.connect(`http://localhost:8080/games`, {query:`roomId=${roomId}`});

socket.on('room_connection_success', res => {
	if (!cookie.load('clientSessionId')) {
		cookie.save('roomId', res.data.roomId, { path: '/'});
		cookie.save('clientSessionId', res.playerId, { path: '/'});
	}
	store.dispatch(fetchData(res.data));
});

socket.on('reconnect_to_room_success', data => {
	store.dispatch(fetchData(data));
});

socket.on('find_room_fail', () => {
	console.log('find_room_fail');
});

export default socket;
