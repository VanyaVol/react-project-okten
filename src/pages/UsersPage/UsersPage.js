import React from 'react';
import {Users} from "../../components/Users/Users";
import appCss from '../../App.module.css';
import {Loading} from "../../components/Loading/Loading";
import {useSelector} from "react-redux";

const UsersPage = () => {
    const {status} = useSelector(state => state['userReducer']);

    return (
        <div className={appCss.wrap}>
            {status === 'pending' && <Loading/>}
            <Users/>
        </div>
    );
};

export {UsersPage};
