import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'
import axios from 'axios';

import homeReducer from './home/reducer'
import moviesReducer from './movies/reducer'
import tvshowsReducer from './tvshows/reducer'
import peopleReducer from './people/reducer'

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    moviesReducer: moviesReducer,
    tvshowsReducer: tvshowsReducer,
    peopleReducer: peopleReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export const api_key = "51c5e1f3c4c8c29cf321427d43c08ab3"
export const baseAxios = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 15000,
});

export default store;
