import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Splash from '../components/Splash';
import { updatePostFormData } from '../actions/postForm';
import { createPost } from '../actions/posts';

class PostForm extends Component {

    handleOnChange = event => {
        const { name, value } = event.target;
        const currentPostFormData = Object.assign({}, this.props.postFormData, {
            [name]: value
        })
        this.props.updatePostFormData(currentPostFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const { createPost, postFormData, history } = this.props;
        createPost(postFormData, history);
    }

    render() {
        const { title, body, author, img_url, category_id } = this.props.postFormData;
        return (
            <div>
                <Splash />                
                <h3 className="formHeader text-center">Post Form</h3>
                {this.props.errors === true ? <FormError /> : null}
                <hr />
                <form className="text-center" onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="title">Title<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                            onChange={this.handleOnChange}
                            name='title'
                            value={title} />
                    </div>
                    <div>
                        <label htmlFor="body">Body<span className="fieldRequired"> *</span>:</label>
                        <textarea type='textarea'
                            onChange={this.handleOnChange}
                            name='body'
                            value={body} />
                    </div>
                    <div>
                        <label htmlFor="category_id">Category<span className="fieldRequired"> *</span>:</label>
                        <select onChange={this.handleOnChange} name='category_id' >
                            <option value="1">CLE</option>
                            <option value="2">Lawline News</option>
                            <option value="3">Hot Topics</option>
                            <option value="4">Legal Marketing</option>
                        </select>
                    </div>                    
                    <div>
                        <label htmlFor="author">Author<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                            onChange={this.handleOnChange}
                            name='author'
                            value={author} />
                    </div>
                    <div>
                        <label htmlFor="img_url">Image URL<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                            onChange={this.handleOnChange}
                            name='img_url'
                            value={img_url} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        postFormData: state.postFormData,
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ updatePostFormData: updatePostFormData,
                                createPost: createPost }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PostForm)