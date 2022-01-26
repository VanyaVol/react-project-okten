import React, {useEffect, useState} from 'react';

import css from './TopInfo.module.css';
import {useLocation, useParams} from "react-router-dom";
import {characterServices} from "../../services/character.services";
import {episodeServices} from "../../services/episode.services";

const TopInfo = () => {
    const [episode, setEpisode] = useState({});
    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (!state && id) {
            episodeServices.getById(id).then(value => setEpisode(value));
        }
        setEpisode(state);
    }, [state, id]);

    return (<div className={css.topInfo}>

        {episode ?
            <div className={css.top}><h1>{episode.name}</h1><h4 className={css.text}>Air date: {episode.air_date}</h4>
                <h4>Episode: {episode.episode}</h4></div> : <h2 className={css.top}>{'Rick and Morty episodes!'}</h2>}
    </div>);
};

export {TopInfo};
