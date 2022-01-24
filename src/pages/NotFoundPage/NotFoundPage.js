import React from 'react';

import css from './NotFoundPage.module.css';


const NotFoundPage = () => {
    return (
        <div className={css.notFound}>
            <div className={css.circle}>
                <h4 className={css.text}>Not found page</h4>
            </div>
        </div>
    );
};

export {NotFoundPage};
