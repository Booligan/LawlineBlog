import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import posts from './reducers/postsReducer';
import post from './reducers/postReducer';
import postFormData from './reducers/postFormData';
import categories from './reducers/categoriesReducer';
import filteredPosts from './reducers/filteredPosts';



const reducers = combineReducers({ posts, post, postFormData, categories, filteredPosts})
const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);