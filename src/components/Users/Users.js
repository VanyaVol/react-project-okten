import {useEffect, useState} from "react";

import "./Users.css";
import {getUsers} from "../../API";
import User from "../User/User";

function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers().then(arrUsers => setUsers(arrUsers));

    }, []);


    return (<div className={'users-block'}>
        {users.map(itemUser => <User key={itemUser.id} itemUser={itemUser}/>)}
    </div>);
}

export default Users;