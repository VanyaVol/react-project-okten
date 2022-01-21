import React from 'react';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (<div className={css.notFound}>
        <div className={css.circle}>
            <p className={css.text}>Not found page</p>
        </div>
    </div>);
};

export {NotFoundPage};
