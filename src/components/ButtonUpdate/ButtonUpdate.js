import React from 'react';

import css from "./ButtonUpdate.module.css";

const ButtonUpdate = ({newImage}) => {
    return (<div>
        <button className={css.btnUpdate} onClick={() => {
            newImage()
        }}>Update
        </button>
    </div>);
};

export {ButtonUpdate};
