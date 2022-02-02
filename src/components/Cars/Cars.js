import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import css from './Cars.module.css';
import {getAllCars} from '../../store/car.slice';
import {Car} from '../Car/Car';

const Cars = () => {
    const {cars} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (<div className={css.cars}>

        {cars.map(itemCar => <Car key={itemCar?.id} car={itemCar}/>)}
    </div>);
}

export {Cars};
