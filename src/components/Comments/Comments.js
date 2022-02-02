import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../store/comment.slice";
import {Comment} from "../Comment/Comment";
import {Loading} from "../Loading/Loading";
import css from './Comments.module.css';


const Comments = () => {
    const {status, comments} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, []);

    return (
        <div className={css.comments}>
            {comments.map(itemComment => <Comment key={itemComment.id} comment={itemComment}/>)}
        </div>
    );
};

export {Comments};
