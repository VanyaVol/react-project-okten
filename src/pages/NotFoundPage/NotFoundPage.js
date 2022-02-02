import React from 'react';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (<div className={css.notFound}>
        <div className={css.cycle}>
            <div className={css.text}>
                NotFoundPage
            </div>
        </div>
    </div>);
};

export {NotFoundPage};
