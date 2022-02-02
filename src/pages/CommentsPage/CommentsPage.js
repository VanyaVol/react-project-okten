import React from 'react';
import {Comments} from "../../components/Comments/Comments";
import appCss from '../../App.module.css';
import {useSelector} from "react-redux";
import commentReducer from "../../store/comment.slice";
import {Loading} from "../../components/Loading/Loading";

const CommentsPage = () => {
    const {status} = useSelector(state => state['commentReducer']);

    return (
        <div className={appCss.wrap}>
            {status === 'pending' && <Loading/>}
            <Comments/>
        </div>
    );
};

export {CommentsPage};
