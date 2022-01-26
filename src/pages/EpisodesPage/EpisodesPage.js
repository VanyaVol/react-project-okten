import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import css from './EpisodesPage.module.css';
import {episodeServices} from '../../services/episode.services';
import {Episode} from '../../components/Episode/Episode';
import {Pagination} from '../../components/Pagination/Pagination';

let page = 1;

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});
    const [trigger, setTrigger] = useState(null);

    useEffect(() => {

        episodeServices.getByPage(page).then(value => {
            setEpisodes(value.results);
            setInfo(value.info);
        })

    }, [trigger]);

    const btnNext = (e) => {
        page = info.next.split('=')[1];
        setTrigger({});
    }

    const btnPrev = (e) => {
        page = info.prev.split('=')[1];
        setTrigger({});
    }

    return (<div>
        <div className={css.episodesBlock}>
            <Outlet/>
            {episodes?.map(itemEpisode => <Episode key={itemEpisode.id} episode={itemEpisode}/>)}
        </div>
        <Pagination btnNext={btnNext} btnPrev={btnPrev} info={info}/>
    </div>);
};

export {EpisodesPage};
