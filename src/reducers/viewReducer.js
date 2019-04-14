import {
    FETCH_GIF,
    CLEAR_VIEW
} from '../actions/types';

export const viewReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_GIF:  
            return action.payload.data;
        case CLEAR_VIEW:
            return {};
        default: 
            return state;
    }
}