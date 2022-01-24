import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.headerWrap}>
                <Link className={css.text} to={'/'}>RickAndMorty!</Link>
            </div>
        </div>
    );
};

export {Header};
