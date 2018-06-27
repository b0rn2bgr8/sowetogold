import {combineReducers} from 'redux';
import authReducer from './authReducer';
import articlesReducers from "./articlesReducers"
export default combineReducers({
    auth: authReducer,
    articles: articlesReducers
});