import React, {useEffect, useState} from 'react';
import {carsServices} from "../../services/cars.services";
import {Car} from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carsServices.getAll().then(arrCars=> setCars(arrCars));
    },[]);

    return (
        <div>
            {cars.map(itemCar=><Car key={itemCar.id} car={itemCar}/>)}
        </div>
    );
};

export {Cars};
