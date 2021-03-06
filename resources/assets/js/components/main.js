import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../components/About';
import PostShow from '../containers/PostShow';
import Posts from '../containers/Posts';
import PostForm from '../containers/PostForm';
import FilteredPosts from '../containers/FilteredPosts';



class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path = '/' component = {Posts} />
                        <Route exact path = '/about' component = {About} />   
                        <Route exact path='/categories/:catID' component={FilteredPosts} />                           
                        <Route exact path = '/posts/new' component = {PostForm} />
                        <Route exact path = '/posts/:id' component = {PostShow} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main;