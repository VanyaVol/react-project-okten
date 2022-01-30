import React from 'react';

const Car = ({car}) => {
    return (
        <div style={{border: '1px solid black'}}>
            <div>
                {car.id}
            </div>
            <div>
                {car.model}
            </div>
            <div>
                {car.year}
            </div>
            <div>
                {car.price}
            </div>
        </div>
    );
};

export {Car};
