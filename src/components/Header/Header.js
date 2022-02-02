import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
    return (<div className={css.headerBlock}>
        <div className={css.header}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/cars'}>Cars</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
        </div>
    </div>);
};

export {Header};
