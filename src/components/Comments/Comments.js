import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../store/comment.slice";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const {status, comments} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, []);

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {comments.map(itemComment => <Comment key={itemComment.id} comment={itemComment}/>)}
        </div>
    );
};

export {Comments};
