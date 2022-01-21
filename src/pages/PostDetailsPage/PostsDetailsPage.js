import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";

import appStyle from "../../App.module.css";
import css from './PostDetailsPage.module.css';
import {postsService} from "../../services/posts.service";

const PostsDetailsPage = () => {
    const [post, setPost] = useState(null);

    const {id: idParam} = useParams();
    const {state: newPost} = useLocation();

    const {userId, id, title, body} = {...post};

    useEffect(() => {
        if (newPost) {
            setPost(newPost);
            return
        }

        postsService.getById(idParam).then(post => setPost(post));

    }, [idParam]);


    return (<div>
        {post && (<div className={css.details}>
            <h4>User ID: {userId}</h4>
            <h4>ID: {id}</h4>
            <h3 className={css.text}>{title}</h3>
            <p>{body}</p>
            <Link to={'comments'}>
                <button className={appStyle.button}>Get comments</button>
            </Link>
        </div>)}
        <Outlet/>
    </div>);
};

export {PostsDetailsPage};
