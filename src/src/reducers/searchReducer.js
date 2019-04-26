import _ from 'lodash';
import {
    SEARCH_GIFS, CLEAR_SEARCH
} from '../actions/types';

const defaultState = {
    offset : 0,
    gifs : {}
};

export const searchReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SEARCH_GIFS:
            return {
                gifs : {...state.gifs, ..._.mapKeys(action.payload.data, 'id')}, 
                offset : action.payload.pagination.offset || 0
            };
        case CLEAR_SEARCH:
            return defaultState;
        default: 
            return state;
    }
}