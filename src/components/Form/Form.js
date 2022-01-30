import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    const {register, handleSubmit, reset} = useForm();

    const carSubmit = (date) => {

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
