import React from 'react';

import css from './Character.module.css';

const Character = ({character}) => {
    const {name, status, species, type, gender, image} = character;
    return (<div className={css.img}>
        <img className={css.img} src={image} alt={name}/>
        <h3 className={css.title}>{name}</h3>
        <p><b>Status</b>: {status}</p>
        <p><b>Species</b>: {species}</p>
        <p><b>Type:</b> {type}</p>
        <p><b>Gender</b>: {gender}</p>
    </div>);
};

export {Character};
