import React from 'react';

import {ButtonUpdate} from "../ButtonUpdate/ButtonUpdate";

const Image = ({imgSrc, newImage}) => {
    return (<div>
        <img src={imgSrc} alt={''}/>
        <ButtonUpdate newImage={newImage}/>
    </div>);
};

export {Image};
