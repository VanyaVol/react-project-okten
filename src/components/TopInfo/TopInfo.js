import React from 'react';

import css from './TopInfo.module.css';

const TopInfo = ({state}) => {
    return (<div className={css.topInfo}>
        {state ? <div className={css.top}><h1>{state.name}</h1><h4 className={css.text}>Air date: {state.air_date}</h4>
            <h4>Episode: {state.episode}</h4></div> : <h2 className={css.top}>{'Rick and Morty episodes!'}</h2>}
    </div>);
};

export {TopInfo};
