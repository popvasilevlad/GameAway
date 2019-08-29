import io from 'socket.io-client';
import store from '../store';
import { fetchData } from '../actions';
import cookie from 'react-cookies';

let socket = io.connect('http://localhost:8080/games');

const clientSessionId = cookie.load('clientSessionId');
const roomId = cookie.load('roomId');


if(!roomId) {
	socket.emit('findRoom');
}
 
socket.on('foundRoom', data => {
	cookie.save('roomId', data.roomId, { path: '/'});
	if (!cookie.load('clientSessionId')) cookie.save('clientSessionId', data.players.pop(), { path: '/'});
});

// const socket = io.connect(`http://localhost:8080?clientSessionId=${clientSessionId}&&roomId=${roomId}`);

export const fetchDataOnLoad = () => socket.emit('fetch_data');

socket.on('fetch_data_success', (data) => {
	store.dispatch(fetchData(data))}

);


export default socket;