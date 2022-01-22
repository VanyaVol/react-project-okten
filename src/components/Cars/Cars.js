import React, {useEffect, useState} from 'react';

import css from './Cars.module.css';
import {carsServices} from "../../services/cars.services";
import {Car} from "../Car/Car";

const Cars = ({newCar, newCarState}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsServices.getAll().then(arrCars => setCars(arrCars));
    }, [newCarState]);

    return (
        <div className={css.carsBlock}>
            {cars.map(itemCar => <Car key={itemCar.id} car={itemCar}/>)}
        </div>
    );
};

export {Cars};
