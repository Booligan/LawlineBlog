const API_URL = "http://lawlineblog.test/api";

export const getPosts = () => {
    return dispatch => {
        return fetch(`${API_URL}/posts`)
            .then(response => response.json())
            .then(posts => dispatch(setPosts(posts.data)))
            .catch(error => console.log(error))
    }
}

export const setPosts = posts => {
    return {
        type: 'GET_POSTS_SUCCESS',
        payload: posts
    }
}