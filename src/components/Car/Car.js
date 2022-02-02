import React from 'react';
import {useDispatch} from 'react-redux';

import css from './Car.module.css';
import {deleteCarById, formSet} from '../../store/car.slice';

const Car = ({car}) => {
    const {id} = car;
    const dispatch = useDispatch();

    return (<div className={css.car}>
        <div>
            Model: {car.model}
        </div>
        <div>
            Year: {car.year}
        </div>
        <div>
            Price: {car.price}
        </div>
        <button className={css.btn} onClick={() => {
            dispatch(deleteCarById({id}))
        }}>Delete
        </button>
        <button className={css.btn} onClick={() => {
            dispatch(formSet({car}))
        }}>Update
        </button>
    </div>);
};

export {Car};
