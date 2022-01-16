import React from 'react';

import './User.css';

const User = ({itemUser, onGetUserDetails}) => {

    return (
        <div className={'users_block__left__user'}>
            <h4>{itemUser.name}</h4>
            <button className={'btn'} onClick={() => {
                onGetUserDetails(itemUser)
            }}>Get user details
            </button>
        </div>
    );
};

export default User;
