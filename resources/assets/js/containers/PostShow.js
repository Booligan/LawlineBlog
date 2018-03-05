import React, { Component } from 'react';
import { connect } from 'react-redux';
import Splash from '../components/Splash';
import TopicLinks from '../containers/TopicLinks';


class PostShow extends Component {
 
    render(){
        const { post } = this.props;
        return(
            <div >
                <Splash />
                <div className="row">
                    <div className="col-md-4 col-sm-4"></div>
                    <img src={post.img_url} height="300" width="300" className="mx-img-responsive img-center col-md-4 col-sm-4 mt-5" />
                    <div className="col-md-4 col-sm-4"></div>                                                        
                </div>
                <h1 className="text-center">{post.title}</h1>
                <p className="text-center mb-3">By: {post.author}</p>
                <h4 className="text-center">{post.body}</h4><hr/>
                <TopicLinks />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const post = state.posts.find(post => String(post.id) === ownProps.match.params.id)
    if (post) {
        return { post: post }
    } else {
        return { post: {} }
    }
}

export default connect(mapStateToProps)(PostShow);