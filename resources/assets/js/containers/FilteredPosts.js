import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';
import Splash from '../components/Splash';
import PostCard from '../components/PostCard';
import TopicLinks from '../containers/TopicLinks';

class FilteredPosts extends Component {

    componentDidMount(){
        let catID = parseInt(this.props.match.params.catID);
        this.props.getPosts("/posts")                
        this.props.getPosts("/categories/" + catID)
        this.props.getPosts("/categories/" + catID)
    }

    render() {
        return (
            <div>
                <Splash />
                <div className="container">
                    {this.props.posts.map(post => <PostCard key={post.id} post={post} />)}                
                </div>
                <TopicLinks />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        posts: state.posts
    })
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPosts: getPosts }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FilteredPosts);
