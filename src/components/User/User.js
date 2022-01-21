import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css';
import appStyle from '../../App.module.css';

const User = ({user}) => {
    const {id, name} = user;
    return (<div className={css.userBlock}>
        <h4 className={css.text}>{id}. {name}</h4>
        <Link to={`${id}`} state={user}>
            <button className={appStyle.button}>Get user details</button>
        </Link>
    </div>);
};

export {User};
