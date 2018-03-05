import { debug } from "util";
import { resetPostForm } from './postForm';

const API_URL = "http://lawlineblog.test/api";

export const getPosts = (endpoint) => {
    return dispatch => {
        return fetch(`${API_URL}` + endpoint)
            .then(response => response.json())
            .then(posts => dispatch(setPosts(posts.data)))
            .catch(error => console.log(error))
    }
}

const setPosts = posts => {
    return {
        type: 'GET_POSTS_SUCCESS',
        payload: posts
    }
}

export const createPost = (post, routerHistory) => {
    return dispatch => {
        return fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(handleErrors)
            .then(response => response.json())
            .then(post => {
                dispatch(postPostForm())
                routerHistory.replace(`/posts`)
            })
            .catch(error => {
                dispatch({ type: 'ERROR' })
                routerHistory.replace(`/posts/new`)
            })
    }
}


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

