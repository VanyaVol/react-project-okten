import React from 'react';

import {Cat, Dog} from "../../components";

const RenderCatAndDog = ({state, deleteCat, deleteDog}) => {
    return (<div style={{display: 'flex', columnGap: '200px'}}>
        <div>
            {state.array.map(item => <Cat key={item.id} item={item} deleteCat={deleteCat}/>)}
        </div>
        <div>
            {state.array.map(item => <Dog key={item.id} item={item} deleteDog={deleteDog}/>)}
        </div>
    </div>);
};

export {RenderCatAndDog};
