import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css';
import appStyle from '../../App.module.css';

const User = ({user}) => {
    const {id, name} = user;
    return (<div className={css.userBlock}>
        <h4 className={css.text}>{id}. {name}</h4>
        <div className={css.buttonBlock}>
            <Link to={`${id}`} state={user}>
                <button className={appStyle.button}>Get user details</button>
            </Link>
            <Link to={`${id}/albums`} state={user}>
                <button className={appStyle.button}>Get album user</button>
            </Link>
        </div>
    </div>);
};

export {User};
