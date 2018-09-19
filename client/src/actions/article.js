import {
    FETCH_ARTICLE, FETCH_ARTICLES, GET_RES
} from './types';

export const _fetchArticles = () => async dispatch => {
    try {
        const res = await fetch('/api/articles');
        const data = await res.json();
        dispatch({ type: FETCH_ARTICLES, payload: data });
    } catch (err) {
        console.error(err)
    }
};

export const _fetchArticle = (id) => async dispatch => {
    const res = await fetch('/api/articles/' + id);
    const data = await res.json();
    dispatch({ type: FETCH_ARTICLE, payload: data });
};

//delete article using id
export const _deleteArticle = (id) => async dispatch => {
    const res = await fetch('/api/articles/' + id, {
        method: "DELETE"
    });
    const data = await res.json();
    dispatch({ type: GET_RES, payload: data })
};

// export const _fetchArticle = (category) => async dispatch => {
//     const res = await fetch('/api/articles/?category=' + category);
//     const data = await res.json();;
//     dispatch({ type: FETCH_ARTICLE, payload: data });
// };