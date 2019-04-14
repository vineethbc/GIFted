import _ from 'lodash';
import {
    FETCH_GIFS
} from '../actions/types';

const defaultState = {
    offset : 0,
    gifs : {}
};
export const trendingReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_GIFS:
            return {
                gifs : {...state.gifs, ..._.mapKeys(action.payload.data, 'id')}, 
                offset : action.payload.pagination.offset || 0
            };
        default:
            return state;
    }
}