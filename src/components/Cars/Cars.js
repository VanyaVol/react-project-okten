import React, {useEffect, useState} from 'react';

import css from './Cars.module.css';
import {carsServices} from "../../services/cars.services";
import {Car} from "../Car/Car";

const Cars = ({update, deleteCar, updateCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsServices.getAll().then(arrCars => setCars(arrCars));
    }, [update]);

    return (<div className={css.carsBlock}>
        {cars.map(itemCar => <Car key={itemCar.id} car={itemCar} deleteCar={deleteCar} updateCar={updateCar}/>)}
    </div>);
};

export {Cars};
