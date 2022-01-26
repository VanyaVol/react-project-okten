import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';

import css from './Layout.module.css';
import {Header} from '../Header/Header';
import {TopInfo} from '../TopInfo/TopInfo';

const Layout = () => {
    const {state} = useLocation();

    return (<div>
        <Header/>
        <TopInfo state={state}/>
        <div className={css.wrapper}>
            <Outlet/>
        </div>
    </div>);
};

export {Layout};
