import giphyApi from '../api/giphyApi'; 
import history from '../history';
import {
    FETCH_GIF,
    FETCH_GIFS,
    SEARCH_GIFS,
    CLEAR_SEARCH,
    CLEAR_VIEW,
    TOGGLE_AUTOPLAY
} from './types';
import {DEFAULT_COUNT, GIPHY_API} from '../constants';

export const fetchGifs = offset => async dispatch => {
    const response = await giphyApi.get(`/v1/gifs/trending?api_key=${GIPHY_API}&limit=${DEFAULT_COUNT}&offset=${offset}`);
    dispatch({type : FETCH_GIFS, payload : response.data});
};

export const searchGifs = (query, offset) => async dispatch => {
    const response = await giphyApi.get(`/v1/gifs/search?api_key=${GIPHY_API}&q=${query}&limit=${DEFAULT_COUNT}&offset=${offset}`);
    dispatch({type : SEARCH_GIFS, payload : response.data});
    history.push(`/search/${query}`);
};

export const fetchGif = id => async dispatch => {
    const response = await giphyApi.get(`/v1/gifs/${id}?api_key=${GIPHY_API}`);
    dispatch({type : FETCH_GIF, payload : response.data});
}

export const clearSearch = () => {
    return {type: CLEAR_SEARCH};
}

export const clearView = () => {
    return {type: CLEAR_VIEW};
}

export const toggleAutoplay = () => {
    return {type : TOGGLE_AUTOPLAY};
}