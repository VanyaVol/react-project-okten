import React, {useEffect, useState} from 'react';
import {episodeServices} from "../../services/episode.services";
import {Episode} from "../../components/Episode/Episode";
import css from './EpisodesPage.module.css';
import {Outlet} from 'react-router-dom';


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        episodeServices.getAll().then(arrEpisodes => setEpisodes(arrEpisodes.results))
    }, []);

    return (
        <div className={css.episodesBlock}>

            <Outlet/>
            {episodes.map(itemEpisode => <Episode key={itemEpisode.id} episode={itemEpisode}/>)}

        </div>);
};

export {EpisodesPage};
