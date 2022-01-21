import React from 'react';

import css from './Photo.module.css';

const Photo = ({photo}) => {
    const {albumId, id, title, thumbnailUrl: url} = photo;

    return (<div className={css.photoBlock}>
        <div className={css.photoText}>
            <h4>Album ID: {albumId}</h4>
            <h4>ID: {id}</h4>
            <h3 className={css.text}>{title}</h3>
        </div>
        <div>
            <img src={url} alt={title}/>
        </div>
    </div>);
};

export {Photo};
