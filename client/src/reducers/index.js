import * as ACTIONS from '../constants/action-types';

const initialState = {
    data: 'Game Title',
    win: false,
    over: false
};

function rootReducer(state = initialState, action) {
    if (action.type === ACTIONS.SEND_RESPONSE) {
        return Object.assign({}, state, {
            data: action.payload
        })
    }

    return state;
}

export default rootReducer;
