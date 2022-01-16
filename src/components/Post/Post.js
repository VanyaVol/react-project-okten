import React from 'react';

import './Post.css';

const Post = ({itemPost: {title, body}}) => {
    return (
        <div className={'posts__post'}>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;
