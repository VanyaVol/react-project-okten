import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <div>{user.id}--{user.name}--{user.username}--{user.email}</div>
        </div>
    );
};

export default User;
