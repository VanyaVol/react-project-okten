import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {usersService} from "../../services/users.service";
import {UserPost} from "../../components/UserPost/UserPost";

const UserPostPage = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        usersService.getPostsUserById(id).then(value => setPosts(value));
    }, []);

    return (
        <div>
            {posts.map(itemPost => <UserPost key={itemPost.id} post={itemPost}/>)}
        </div>
    );
};

export {UserPostPage};
