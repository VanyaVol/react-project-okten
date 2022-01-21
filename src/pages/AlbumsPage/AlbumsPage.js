import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import css from './AlbumsPage.module.css';
import {Album} from "../../components/Album/Album";
import {usersService} from "../../services/users.service";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
        usersService.getAlbumsById(userId).then(arrAlbums => setAlbums(arrAlbums));
    }, [userId]);

    return (
        <div>
            <div className={css.albumsBlock}>
                {albums.map(itemAlbums => <Album key={itemAlbums.id} album={itemAlbums}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export {AlbumsPage};
