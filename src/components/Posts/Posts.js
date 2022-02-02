import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../store/post.slice";
import {Post} from "../Post/Post";
import css from './Posts.module.css';


const Posts = () => {
    const {posts} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPosts());
    },[])
    return (
        <div className={css.posts}>
            {posts.map(itemPost=> <Post key={itemPost.id} post={itemPost}/>)}
        </div>
    );
};

export {Posts};
