import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import appStyle from "../../App.module.css";
import css from "./PostsPage.module.css";
import {postsService} from "../../services/posts.service";
import {urls} from "../../configs/urls";
import {Post} from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll(urls.posts).then(arrPosts => setPosts(arrPosts));
    }, []);

    return (<div className={appStyle.block}>
            <div className={appStyle.wrap}>
                <div className={css.postsBlock}>
                    {posts.map(itemPost => <Post key={itemPost.id} post={itemPost}/>)}
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>

    );
};

export {PostsPage};

