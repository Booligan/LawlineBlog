const API_URL = "http://lawlineblog.test/api";

export const getCategories = () => {
    return dispatch => {
        return fetch(`${API_URL}/categories`)
            .then(response => response.json())
            .then(categories => dispatch(setCategories(categories.data)))
            .catch(error => console.log(error))
    }
}

const setCategories = categories => {
    return {
        type: 'GET_CATEGORIES_SUCCESS',
        payload: categories
    }
}