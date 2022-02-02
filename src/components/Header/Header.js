import React from 'react';
import css from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className={css.headerBlock}>
            <div className={css.header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/cars'}>Cars</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
        </div>
    );
};

export {Header};
