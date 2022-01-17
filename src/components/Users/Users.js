import React from 'react';
import User from "../User/User";

const Users = ({users}) => {
    return (
        <div>
            {users.map(itemUser => <User key={itemUser.id} user={itemUser}/>)}
        </div>
    );
};

export default Users;
