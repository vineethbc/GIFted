import { combineReducers } from 'redux';
import { trendingReducer } from './trendingReducer';
import { viewReducer } from './viewReducer';
import { searchReducer } from './searchReducer';
import { autoPlayReducer } from './autoPlayReducer';

export default combineReducers({
    trending : trendingReducer,
    view : viewReducer,
    search : searchReducer,
    isAutoPlay : autoPlayReducer
});