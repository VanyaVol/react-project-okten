import React from 'react';
import {Link} from 'react-router-dom';

import appStyle from '../../App.module.css';
import css from "./Album.module.css";

const Album = ({album}) => {

    const {userId, id, title} = album;

    return (<div className={css.albumBlock}>
            <h4>User ID: {userId}</h4>
            <h4>ID: {id}</h4>
            <h3 className={css.text}>{title}</h3>
            <Link to={`${id}/photos`}>
                <button className={appStyle.button}>Get photos</button>
            </Link>
        </div>

    );
};

export {Album};
