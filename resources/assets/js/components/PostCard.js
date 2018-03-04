import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => (
    <div key={post.id} className="PostCard">
        <h3>{post.title}</h3>
        <small>Created by: {post.author} on {post.created_at}</small><br />
        <Link to={`/posts/${post.id}`} exact className="btn btn-info">Read More</Link>                        
    </div>
)

export default PostCard;