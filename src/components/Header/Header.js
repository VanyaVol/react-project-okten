import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {
    return (
        <div className={css.header}>
            <Link className={css.text} to={'/'}>RickAndMorty!</Link>
        </div>
    );
};

export {Header};
