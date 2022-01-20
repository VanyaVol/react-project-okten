import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/users.service";
import {User} from "../../components/User/User";
import {Outlet} from "react-router-dom";


const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(arrUsers => setUsers([...arrUsers]));
    }, []);

    return (
        <div style={{display: 'flex'}}>
            <div>
                {users.map(itemUser => <User key={itemUser.id} user={itemUser}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};


export {UsersPage};
