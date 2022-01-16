import React, {useEffect, useState} from 'react';

import './Users.css';
import {users} from "../../services/users.services";
import User from "../User/User";

const Users = ({onGetUserDetails}) => {
    const [arrUsers, setArrUsers] = useState([]);

    useEffect(() => {
        users.getAll().then(arrUsers => setArrUsers(arrUsers));
    }, []);

    return (
        <div className={'users_block__left'}>
            {arrUsers.map(itemUser => <User key={itemUser.id} itemUser={itemUser}
                                            onGetUserDetails={onGetUserDetails}/>)}
        </div>
    );
};

export default Users;
