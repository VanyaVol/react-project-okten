import React from 'react';

import css from './Pagination.module.css';

const Pagination = ({btnNext, btnPrev, info}) => {
    const {next, prev} = info;

    return (<div className={css.pages}>
        <button className={css.buttons} disabled={!prev} onClick={() => {
            btnPrev()
        }}>Prev
        </button>
        <button className={css.buttons} disabled={!next} onClick={() => {
            btnNext()
        }}>Next
        </button>
    </div>);
};

export {Pagination};
