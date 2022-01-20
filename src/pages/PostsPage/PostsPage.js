import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.service";
import {urls} from "../../configs/urls";
import {Post} from "../../components/Post/Post";
import {Outlet} from "react-router-dom";


const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll(urls.posts).then(arrPosts => setPosts(arrPosts));
    }, []);

    return (
        <div style={{display: 'flex'}}>
            <div>
                {posts.map(itemPost => <Post key={itemPost.id} post={itemPost}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};
