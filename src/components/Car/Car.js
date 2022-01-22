import React from 'react';

import css from './Car.module.css';

const Car = ({car, deleteCar, updateCar}) => {
    const {id, model, year, price} = car;

    return (<div className={css.car}>
        <h4>ID: {id}</h4>
        <p>Model: {model}</p>
        <p>Year: {year}</p>
        <p>Price: {price}</p>
        <button className={css.btn} onClick={() => {
            deleteCar(id)
        }}>Delete
        </button>
        <button className={css.btn} onClick={() => {
            updateCar(car)
        }}>Update
        </button>
    </div>);
};

export {Car};
