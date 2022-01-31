import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCar, createCar} from "../../store/car.slice";

const Form = () => {
    const dispatch = useDispatch();

    const {register, handleSubmit, reset} = useForm();

    const carSubmit = (data) => {
        dispatch(createCar({id: 33, data}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carSubmit)}>
                <label>Model: <input {...register('model')} type="text"/></label>
                <label>Year: <input {...register('year')} type="text"/></label>
                <label>Price: <input {...register('price')} type="text"/></label>
                <button>Create...</button>
            </form>
        </div>
    );
};

export {Form};
