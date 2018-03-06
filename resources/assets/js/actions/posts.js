import { debug } from "util";
import { resetPostForm } from './postForm';

const API_URL = "http://lawlineblog.test/api";

export const getPosts = () => {
    return dispatch => {
        return fetch(`${API_URL}` + "/posts")
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

export const getPost = (postID) => {
    return dispatch => {
        return fetch(`${API_URL}` + `/posts/${postID}`)
            .then(response => response.json())
            .then(post => dispatch(setPost(post.data)))
            .catch(error => console.log(error))
    }
}

const setPost = post => {
    return {
        type: 'GET_POST_SUCCESS',
        payload: post
    }
}

export const getFilteredPosts = (catID) => {
    return dispatch => {
        return fetch(`${API_URL}` + `/categories/${catID}`)
            .then(response => response.json())
            .then(posts => dispatch(setFilteredPosts(posts.data)))
            .catch(error => console.log(error))
    }
}

const setFilteredPosts = posts => {
    return {
        type: 'GET_FILTERED_POSTS_SUCCESS',
        payload: posts
    }
}

