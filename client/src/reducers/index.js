import * as ACTIONS from '../constants/action-types';

const initialState = {
    game_room_id: '',
    game_room_title: '',
    game_room_subtitle: '',
    entries: [],
    player_1: '',
    player_2: '',
    loading: true,
    win: false,
    over: false
};

function rootReducer(state = initialState, action) {
    if (action.type === ACTIONS.FETCH_DATA) {
        return Object.assign({}, state, {
            ...action.payload,
            loading: false
        });
    }

    return state;
}

export default rootReducer;

