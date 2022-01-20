import React from 'react';

const UserPost = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <h5>{userId}</h5>
            <h5>{id}</h5>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export {UserPost};
