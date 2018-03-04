import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <small>Created by: on</small>            
        </div>
)

export default PostCard;