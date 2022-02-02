import React from 'react';
import {Link} from 'react-router-dom';
import css from './HomePage.module.css';
import appCss from '../../App.module.css';

const HomePage = () => {
    return (
        <div className={`${css.homePage} ${appCss.wrap}`}>
            <div className={css.block}>
                <Link to={'cars'}>Cars</Link>
            </div>
            <div className={css.block}>
                <Link to={'users'}>Users</Link>
            </div>
            <div className={css.block}>
                <Link to={'posts'}>Posts</Link>
            </div>
            <div className={css.block}>
                <Link to={'comments'}>Comments</Link>
            </div>
        </div>
    );
};

export {HomePage};
