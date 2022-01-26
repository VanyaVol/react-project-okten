import React from 'react';
import {Link} from 'react-router-dom';

import css from './Episode.module.css';

const Episode = ({episode}) => {
    const {id, name, air_date, episode: episodeName} = episode;
    return (<div className={css.episodeBlock}>
        <h2>{name}</h2>
        <p>{air_date}</p>
        <p>{episodeName}</p>
        <Link to={`${id}/character`} state={episode}>Episode details</Link>
    </div>);
};

export {Episode};
