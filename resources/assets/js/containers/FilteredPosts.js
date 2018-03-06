import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFilteredPosts } from '../actions/posts';
import Splash from '../components/Splash';
import PostCard from '../components/PostCard';
import TopicLinks from '../containers/TopicLinks';

class FilteredPosts extends Component {

    componentDidMount(){
        let catID = this.props.match.params.catID;
        this.props.getFilteredPosts(catID);            
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
        posts: state.filteredPosts
    })
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ getFilteredPosts: getFilteredPosts }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FilteredPosts);
