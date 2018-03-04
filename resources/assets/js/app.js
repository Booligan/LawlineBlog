require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import store from './store'
import { Provider } from 'react-redux';
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <Main />
        </ Provider>, 
    document.getElementById('root'));
}