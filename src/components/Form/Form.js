import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createCar, formSet, updateCar} from "../../store/car.slice";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";
import css from './Form.module.css';
import appCss from '../../App.module.css';

const Form = () => {
    const dispatch = useDispatch();

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator), mode: 'onTouched'
    });

    const {form} = useSelector(state => state['carReducer']);

    useEffect(() => {
        setValue('model', form?.model);
        setValue('year', form?.year);
        setValue('price', form?.price);
    }, [form]);


    const carSubmit = (data) => {
        if (form.model) {
            dispatch(updateCar({form, data}))
        } else {
            dispatch(createCar({data}));
        }
        console.log(form);
        reset()
    }

    return (<div className={`${css.form}`}>
        <form onSubmit={handleSubmit(carSubmit)}>
            <label className={css.label}>Model: <input {...register('model')} type="text"/></label>
            {errors.model && <div>{errors.model.message}</div>}
            <label className={css.label}>Year: <input {...register('year')} type="text"/></label>
            {errors.year && <div>{errors.model.message}</div>}
            <label className={css.label}>Price: <input {...register('price')} type="text"/></label>
            {errors.price && <div>{errors.model.message}</div>}
            <button className={css.btn}>{!!form.model ? 'Update' : 'Create...'}</button>
        </form>
    </div>);
};


export {Form};
