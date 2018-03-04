import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TopicLinks extends Component {
 
    handleOnClick = (event) => {
       debugger;
    }

    render(){
        return (<div className="text-center mt-5">
            <h7>---------- Topics ----------</h7>
            <Link onClick={(e) => this.handleOnClick(e)} to="/posts/CLE" exact className="nav-link" >CLE</Link>
            <Link to="/posts/Lawline_News" exact className="nav-link" >Lawline News</Link>
            <Link to="/posts/Hot_Topics" exact className="nav-link" >Hot Topics</Link>
            <Link to="/posts/Legal_Marketing" exact className="nav-link" >Legal Marketing</Link>
        </div>
        )
    }
}

export default TopicLinks;