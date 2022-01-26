import React, {useEffect, useState} from 'react';
import {episodeServices} from "../../services/episode.services";
import {Episode} from "../../components/Episode/Episode";
import css from './EpisodesPage.module.css';
import {Outlet} from 'react-router-dom';
import {Pagination} from "../../components/Pagination/Pagination";
import axios from "axios";

let page = 1;

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});
    const [nextPage, setNextPage] = useState([]);

    useEffect(() => {

        episodeServices.getByPage(page).then(value => {
            setEpisodes(value.results);
            setInfo(value.info);
        })


    }, [info]);

    const btnNext = (e) => {
        page = info.next.split('=')[1];
    }

    const btnPrev = (e) => {
        page = info.prev.split('=')[1];
    }

    return (
        <div>
            <div className={css.episodesBlock}>
                <Outlet/>
                {episodes?.map(itemEpisode => <Episode key={itemEpisode.id} episode={itemEpisode}/>)}
            </div>
            <Pagination btnNext={btnNext} btnPrev={btnPrev} info={info}/>
        </div>);
};

export {EpisodesPage};
