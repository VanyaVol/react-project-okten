import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCars} from "../../store/car.slice";
import {Car} from '../Car/Car';


const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (<div>
            {status === 'pending' && <h1>Loading...</h1>}
            {cars.map(itemCar => <Car key={itemCar.id} car={itemCar}/>)}
        </div>);
}

export {Cars};
