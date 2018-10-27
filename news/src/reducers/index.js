import { ADD_ARTICLES, SET_FILTER } from '../action-types';

const initialState = {
    articles: [],
    filter: undefined
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ARTICLES:
            let newArticles = action.articles.map(article => {
                return {
                    ...article,
                    category: action.category
                };
            })
            console.log(newArticles);
            return {
                ...state,
                articles: [...state.articles, ...newArticles]
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state;
    }
};

export default reducer;