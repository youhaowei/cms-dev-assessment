import {ADD_ARTICLES, SET_FILTER} from './action-types';

export const setFilter = filter => ({type: SET_FILTER, filter})

export const addArticles = (articles, category) => ({
    type: ADD_ARTICLES, articles, category
})