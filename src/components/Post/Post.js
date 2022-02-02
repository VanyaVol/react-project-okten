import React from 'react';

import css from './Post.module.css';

const Post = ({post}) => {
    return (
        <div className={css.post}>
            <div>{post.id}. {post.title}</div>
            <div>Body: {post.body}</div>
        </div>
    );
};

export {Post};
