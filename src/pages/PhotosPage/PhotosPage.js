import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from './PhotosPage.module.css';
import {albumsService} from "../../services/albums.service";
import {Photo} from "../../components/Photo/Photo";

const PhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(() => {
        albumsService.getPhotosById(albumId).then(arrPhotos => setPhotos(arrPhotos));
    }, [albumId]);

    return (
        <div className={css.photosBlock}>
            {photos.map(itemPhoto => <Photo key={itemPhoto.id} photo={itemPhoto}/>)}
        </div>
    );
};

export {PhotosPage};
