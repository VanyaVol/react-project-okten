import React from 'react';
import {Outlet} from 'react-router-dom';

import css from './Layout.module.css';
import {Header} from '../Header/Header';
import {TopInfo} from '../TopInfo/TopInfo';

const Layout = () => {
    return (<div>
        <Header/>
        <TopInfo/>
        <div className={css.wrapper}>
            <Outlet/>
        </div>
    </div>);
};

export {Layout};
