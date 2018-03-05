import { debug } from "util";

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


