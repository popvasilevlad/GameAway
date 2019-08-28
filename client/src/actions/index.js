import * as ACTIONS from '../constants/action-types';

export function fetchData(payload) {
    return {
        type: ACTIONS.FETCH_DATA,
        payload
    }
}