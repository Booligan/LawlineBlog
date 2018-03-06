import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Splash from '../components/Splash';
import TopicLinks from '../containers/TopicLinks';
import { getPost } from '../actions/posts';

class PostShow extends Component {

    componentDidMount(){
        let postID = this.props.match.params.id
        this.props.getPost(postID);        
    }
 
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

const mapStateToProps = (state) => {
    return ({
        post: state.post
    })
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPost: getPost }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PostShow);