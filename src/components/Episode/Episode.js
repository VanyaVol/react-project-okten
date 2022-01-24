import React from 'react';

import css from './Episode.module.css';
import {Link} from "react-router-dom";


const Episode = ({episode}) => {
    const {id, name, air_date, episode: episodeName, characters} = episode;
    console.log(episode);
    return (
        <div className={css.episodeBlock}>
            <h2>{name}</h2>
            <p>{air_date}</p>
            <p>{episodeName}</p>
            <Link to={`${id}/character`} state={characters}>Episode details</Link>
        </div>
    );
};

export {Episode};
