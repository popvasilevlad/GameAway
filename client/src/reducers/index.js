import * as ACTIONS from '../constants/action-types';

const initialState = {
    game_room_id: '',
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

    if (action.type === ACTIONS.ADD_VALUE) {
        return Object.assign({}, state, {
            entries: action.payload.entries,
            last_edit: action.payload.last_edit
        });
    }

    if (action.type === ACTIONS.GAME_OVER) {
        return Object.assign({}, state, {
            winner: action.payload
        });
    }

    if (action.type === ACTIONS.NEW_GAME_STARTED) {
        return Object.assign({}, state, {
            ...action.payload,
            loading: false
        });
    }

    if (action.type === ACTIONS.START_NEW_GAME) {
        return Object.assign({}, state, {
            loading: action.payload
        });
    }

    if (action.type === ACTIONS.PLAYER_NAME_UPDATED) {
        return Object.assign({}, state, {
            [action.payload.player]: action.payload.player_data
        });
    }

    return state;
}

export default rootReducer;

