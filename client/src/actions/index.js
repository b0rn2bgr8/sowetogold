import { FETCH_USER, FETCH_ARTICLES  } from './types';
const base = "http://localhost:8080"

export const fetchUser = () => async dispatch => {
    const res = await fetch('/auth/current-user', { credentials: 'include' });
    const data = await res.json();
    dispatch({ type: FETCH_USER, payload: data.user });
};
export const fetchArticles = () => async dispatch => {
    const res = await fetch(base+'/articles');
    const data =  await res.json();
    // console.log("articles", data);
    dispatch({type: FETCH_ARTICLES, payload:data});
};

// import {FETCH_CATEGORY, FETCH_ARTICLES ,FETCH_USER, SET_USER } from './types';

// export const fetchUser = () => async dispatch => {
//        const res = await fetch(base+'/user/get-current-user', {credentials: "include"});
//        const data = await res.json();
//        console.log("data", data.user)
//        dispatch({type: FETCH_USER, payload: data.user});
//     }
// export  const setUser = (payload)=>async dispatch =>{
//         dispatch({type:SET_USER,payload});
    
//     }
// const base = "http://localhost:8080"

// export const fetchCategory = () => async dispatch => {
//         const res = await fetch(base+'/category');
//         const data = await res.json();
//         dispatch({type: FETCH_CATEGORY, payload: data});
//      }
// export const fetchArticles = () => async dispatch => {
//     const res = await fetch(base+'/articles');
//     const data =  await res.json();
//     console.log("articles", data);
//     dispatch({type: FETCH_ARTICLES, payload:data});
// }