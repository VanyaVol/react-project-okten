import React from 'react';

import css from './Comment.module.css';

const Comment = ({comment}) => {
    return (<div className={css.comment}>
        <div>{comment.id}. {comment.name}</div>
        <div>Body: {comment.body}</div>
    </div>);
};

export {Comment};
