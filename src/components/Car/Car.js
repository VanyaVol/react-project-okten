import React from 'react';

const Car = ({car}) => {
    const {id, model, year, price} = car;

    return (
        <div>
            <h4>ID: {id}</h4>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export {Car};
