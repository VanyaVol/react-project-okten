import React from 'react';
import {Outlet} from 'react-router-dom';

import appCss from '../../App.module.css';

import {Header} from '../Header/Header';

const Layout = () => {
    return (<div>
        <Header/>
        <div className={appCss.wrap}>
            <Outlet/>
        </div>
    </div>);
};

export {Layout};
