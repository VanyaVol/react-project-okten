import React from 'react';
import {Link} from "react-router-dom";

import appStyle from "../../App.module.css";
import css from './Post.module.css'


const Post = ({post}) => {
    return (<div className={css.post}>
        <h4 className={css.text}>{post.id}. {post.title}</h4>
        <Link to={post.id.toString()} state={post}>
            <button className={appStyle.button}>Get post details</button>
        </Link>
    </div>);
};

export {Post};
