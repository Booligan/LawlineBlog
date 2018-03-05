import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import posts from './reducers/postsReducer';
import postFormData from './reducers/postFormData';
import categories from './reducers/categoriesReducer';


const reducers = combineReducers({ posts, postFormData, categories})
const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);