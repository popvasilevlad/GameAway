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
        type: ACTIONS.ADD_VALUE,
        payload
    }
}

export function handleGameOver(payload) {
    return {
        type: ACTIONS.GAME_OVER,
        payload
    }
}

export function startedNewGame(payload) {
    return {
        type: ACTIONS.NEW_GAME_STARTED,
        payload
    }
}

export function updatedNameHandle(payload) {
    return {
        type: ACTIONS.PLAYER_NAME_UPDATED,
        payload
    } 
}

export function startNewGame() {
    startNewGameEmit();

    return {
        type: ACTIONS.START_NEW_GAME,
        payload: true
    }
}



export const changeName = (id, name) => {
    socket.emit('change_user_name', {
        id,
        name
    });
}

export const playTurn = value => {
	socket.emit('add_value', {
		value,
		playerId: cookie.load('clientSessionId')
	});
}

export const startNewGameEmit = () => {
	socket.emit('start_new_game');
}