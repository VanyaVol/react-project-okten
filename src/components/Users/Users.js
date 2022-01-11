import {useEffect, useState} from "react";

import "./Users.css";
import {getUsers} from "../../API";
import User from "../User/User";

function Users() {

    useEffect(() => {

        getUsers().then(arrUsers => setUsers(arrUsers));

    }, []);

    let [users, setUsers] = useState([]);

    return (
        <div className={'users-block'}>
            {
                users.map(itemUser => <User key={itemUser.id} itemUser={itemUser}/>)
            }
        </div>
    );
}

export default Users;