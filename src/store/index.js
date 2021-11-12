import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'
import axios from 'axios';

import homeReducer from './home/reducer'
import moviesReducer from './movies/reducer'
import tvshowsReducer from './tvshows/reducer'

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    moviesReducer: moviesReducer,
    tvshowsReducer: tvshowsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk)) 

export const baseAxios = axios.create({
    // baseURL: baseUrl,
    // timeout: 15000,
});

export default store;
