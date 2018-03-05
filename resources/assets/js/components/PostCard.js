import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => (
    <div key={post.id} className="PostCard">
        <h3 className="text-center">{post.title}</h3>
        <img src={post.img_url} key={post.id} height="100" width="100" className="postcard-img" />
        <small style={{position:"absolute"}}>Created by: {post.author} on {post.created_at}</small><br />
        <Link to={`/posts/${post.id}`} exact className="btn btn-info ml-2 mb-2">Read More</Link>                        
    </div>
)

export default PostCard;