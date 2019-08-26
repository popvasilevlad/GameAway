import * as ACTIONS from '../constants/action-types';

export function sendResponse(payload) {
    return {
        type: ACTIONS.SEND_RESPONSE,
        payload
    }
}