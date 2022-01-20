import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    return (
        <div>
            <h4>{post.id}. {post.title}</h4>
            <Link to={post.id.toString()} state={post}>
                <button>Get post details</button>
            </Link>
        </div>
    );
};

export {Post};
