import React from 'react';
import {Posts} from "../../components/Posts/Posts";
import appCss from '../../App.module.css';
import {useSelector} from "react-redux";
import {Loading} from "../../components/Loading/Loading";

const PostsPage = () => {
    const {status} = useSelector(state => state['postReducer']);

    return (
        <div className={appCss.wrap}>
            {status ==='pending' && <Loading/>}
            <Posts/>
        </div>
    );
};

export {PostsPage};
