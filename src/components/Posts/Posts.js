import React from 'react';

import "./Posts.css";
import Post from "../Post/Post";

const Posts = ({arrPosts}) => {
    return (
        <div className={'posts'}>
            {arrPosts.map(itemPost => <Post key={itemPost.id} itemPost={itemPost}/>)}
        </div>
    );
};

export default Posts;
