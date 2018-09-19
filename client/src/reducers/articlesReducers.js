import { FETCH_ARTICLES, FETCH_ARTICLE, GET_RES } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                allarticles: action.payload || false
            }
        case FETCH_ARTICLE:
            return {
                ...state,
                article: action.payload || false
            }
        case GET_RES:
            return {
                ...state,
                respond: action.payload || false
            }
        default:
            return state;
    }
}