import * as ACTIONS from '../constants/action-types';
import socket from '../sockets';
import cookie from 'react-cookies';

export function fetchData(payload) {
    return {
        type: ACTIONS.FETCH_DATA,
        payload
    }
}

export function addedValue(payload) {
    return {
        type: ACTIONS.ADDED_VALUE,
        payload
    }
}

export function handleGameOver(payload) {
    return {
        type: ACTIONS.GAME_OVER,
        payload
    }
}

export function addValue(value) {
	socket.emit('add_value', {
		value: value,
		playerId: cookie.load('clientSessionId')
	});
}