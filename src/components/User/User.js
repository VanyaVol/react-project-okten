import React from 'react';

import css from './User.module.css';

const User = ({user}) => {
    return (<div className={css.user}>
        <div>{user.id}. {user.name}</div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
        <div>Address: {user.address.city}, {user.address.street}</div>
    </div>);
};

export {User};
