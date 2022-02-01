import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../store/post.slice";
import {Post} from "../Post/Post";

const Posts = () => {
    const {posts, status} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPosts());
    },[])
    return (
        <div>
            {status ==='pending' && <h1>Loading...</h1>}
            {posts.map(itemPost=> <Post key={itemPost.id} post={itemPost}/>)}
        </div>
    );
};

export {Posts};
