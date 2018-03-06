import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../actions/categories';

class TopicLinks extends Component {

    componentDidMount() {
        this.props.getCategories()
    }

    handleOnClick = () => {
        this.props.getPosts("/posts")                        
    }

    render(){
        return (
            <div className="text-center ml-5 mt-5 topic-links">
                <h6 id="topic-header">---------- Topics ----------</h6>
                
                {this.props.categories.map((category,index,array) =>
                        <Link onClick={() =>{this.handleOnClick()}}to={"/categories/" + category.id} exact="true" key={category.id} className="topic-links">
                            <br />{category.name}<br />
                        </Link>
                    )
                }
            </div>            
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        categories: state.categories,
    })
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        getCategories: getCategories,                      
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TopicLinks);
