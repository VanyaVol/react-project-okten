import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addCar, createCar, updateCar} from "../../store/car.slice";

const Form = () => {
    const dispatch = useDispatch();

    const {register, handleSubmit, reset, setValue} = useForm();

    const {form} = useSelector(state => state['carReducer']);

    useEffect(()=> {
        setValue('model',form?.model);
        setValue('year',form?.year);
        setValue('price',form?.price);
    },[form]);



    const carSubmit = (data) => {
        if (form.model){
            dispatch(updateCar({data}))
        } else {
            dispatch(createCar({data}));
        }
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carSubmit)}>
                <label>Model: <input {...register('model')} type="text"/></label>
                <label>Year: <input {...register('year')} type="text"/></label>
                <label>Price: <input {...register('price')} type="text"/></label>
                <button>{!!form.model?'Update':'Create...'}</button>
            </form>
        </div>
    );
};


export {Form};
