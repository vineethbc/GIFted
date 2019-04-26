import {
    TOGGLE_AUTOPLAY
} from '../actions/types';
export const autoPlayReducer = (state = true, action) => {
    if (action.type === TOGGLE_AUTOPLAY) {
        return !state;
    }
    return state;
};