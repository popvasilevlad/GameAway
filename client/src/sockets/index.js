import io from 'socket.io-client';
import store from '../store';
import { fetchData } from '../actions';

const socket = io.connect('http://localhost:8080');

export const fetchDataOnLoad = () => socket.emit('fetch_data');

socket.on('fetch_data_success', data => store.dispatch(fetchData(data)));


export default socket;