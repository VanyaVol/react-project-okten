import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store/user.slice";
import {User} from "../User/User";
import {Loading} from "../Loading/Loading";
import css from './Users.module.css';

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state['userReducer']);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className={css.users}>
            {users.map(itemUser => <User key={itemUser.id} user={itemUser}/>)}
        </div>
    );
};

export {Users};
