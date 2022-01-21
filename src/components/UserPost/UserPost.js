import React from 'react';

import css from "./UsersPost.module.css";

const UserPost = ({post}) => {
    const {userId, id, title, body} = post;
    return (<div className={css.post}>
        <h5>User id: {userId}</h5>
        <h5>ID: {id}</h5>
        <h4 className={css.text}>{title}</h4>
        <p>{body}</p>
    </div>);
};

export {UserPost};
