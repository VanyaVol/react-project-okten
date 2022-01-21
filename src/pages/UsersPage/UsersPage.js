import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from './UsersPage.module.css';
import appStyle from '../../App.module.css';
import {usersService} from "../../services/users.service";
import {User} from "../../components/User/User";


const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(arrUsers => setUsers([...arrUsers]));
    }, []);

    return (<div className={appStyle.block}>
            <div className={appStyle.wrap}>
                <div className={css.usersBlock}>
                    {users.map(itemUser => <User key={itemUser.id} user={itemUser}/>)}
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>

    );
};


export {UsersPage};
