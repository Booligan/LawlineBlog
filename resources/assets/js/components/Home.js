import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container">
            <h1>My Posts</h1>
            <Link to="/posts/new" className="btn btn-primary">Create A Post</Link>            
        </div>
    )
}

export default Home;