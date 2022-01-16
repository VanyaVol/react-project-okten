import React from 'react';

import './UserDetails.css';

const UserDetails = ({
                         user: {
                             id,
                             name,
                             username,
                             email,
                             phone,
                             website,
                             address: {zipcode, suite, city, street, geo: {lat, lng}},
                             company: {name: companyName, catchPhrase, bs}
                         }, onGetUserPosts
                     }) => {
    return (
        <div className={'users_block__right'}>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <h4>{email}</h4>

            <div className={'user_details__address'}>
                <h4>Address:</h4>
                <p>{zipcode}, {suite}, {city}, {street}</p>
                <p>Geo: {lat}, {lng}</p>
            </div>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <div className={'user_details__company'}>
                <h4>Company:</h4>
                <h5>Name: {companyName}</h5>
                <p>{catchPhrase}</p>
                <p>{bs}</p>
            </div>
            <button className={'btn'} onClick={() => {
                onGetUserPosts(id)
            }}>Get posts user
            </button>
        </div>
    );
};

export default UserDetails;
