import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store/user.slice";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users, status} = useSelector(state => state['userReducer']);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {users.map(itemUser => <User key={itemUser.id} user={itemUser}/>)}
        </div>
    );
};

export {Users};
