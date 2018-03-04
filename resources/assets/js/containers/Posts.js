import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';
import PostCard from '../components/PostCard'

class Posts extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <div className="container">
              
                {this.props.posts.map(post => <PostCard key={post.id} post={post} />)}
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
    return bindActionCreators({getPosts: getPosts}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Posts);