import React from 'react';

import css from "./PostComments.module.css";

const PostComments = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (<div className={css.commentBlock}>
        <h4>Post ID: {postId}</h4>
        <h4>ID: {id}</h4>
        <h3 className={css.text}>{name}</h3>
        <h5>{email}</h5>
        <p>{body}</p>
    </div>);
};

export {PostComments};
