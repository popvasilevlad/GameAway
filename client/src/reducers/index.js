import * as ACTIONS from '../constants/action-types';

const initialState = {
    game_room_id: '',
    game_room_title: '',
    game_room_subtitle: '',
    entries: [],
    align: 'left',
    player_1: '',
    player_2: '',
    loading: true,
    winner: ''
};

function rootReducer(state = initialState, action) {
    if (action.type === ACTIONS.FETCH_DATA) {
        return Object.assign({}, state, {
            ...action.payload,
            loading: false
        });
    }

    if (action.type === ACTIONS.ADDED_VALUE) {
        console.log('add value', action.payload)
        return Object.assign({}, state, {
            entries: action.payload.entries,
            last_edit: action.payload.last_edit
        });
    }

    if (action.type === ACTIONS.GAME_OVER) {
        console.log('GAME_OVER', action.payload)
        return Object.assign({}, state, {
            winner: action.payload
        });
    }

    return state;
}

export default rootReducer;

