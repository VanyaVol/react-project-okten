import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarById} from "../../store/car.slice";

const Car = ({car}) => {
    const {id} = car;
    const dispatch = useDispatch();

    return (
        <div style={{border: '1px solid black', width: '100px', marginBottom: '10px'}}>
            <div>
                {car.model}
            </div>
            <div>
                {car.year}
            </div>
            <div>
                {car.price}
            </div>
            <button onClick={()=>{dispatch(deleteCarById({id}))}}>Delete...</button>
            <button onClick={()=>{}}>Update...</button>
        </div>
    );
};

export {Car};
