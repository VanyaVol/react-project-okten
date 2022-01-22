import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './Form.module.css';
import {carValidator} from "../../validators/car.validator";

const Form = ({newCar, carForm}) => {
    const {register, handleSubmit, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator), mode: "onTouched"
    });

    useEffect(() => {
        setValue('model', carForm.model);
        setValue('year', carForm.year);
        setValue('price', carForm.price);
    }, [carForm]);

    return (<div className={css.form}>
        <form onSubmit={handleSubmit(newCar)} className={css.formCar}>
            <label className={css.label}>Model: <input {...register('model')} type="text"/></label>
            {errors.model && <div className={css.error}>{errors.model.message}</div>}
            {/*{formError?.model && <span>{formError.model[0]}<br/></span>}*/}
            <label className={css.label}>Year: <input {...register('year')} type="text"/></label>
            {errors.year && <div className={css.error}>{errors.year.message}</div>}
            {/*{formError?.year && <span>{formError.year[0]}<br/></span>}*/}
            <label className={css.label}>Price: <input {...register('price')} type="text"/></label>
            {errors.price && <div className={css.error}>{errors.price.message}</div>}
            {/*{formError?.price && <span>{formError.price[0]}<br/></span>}*/}
            <button className={css.button}>{carForm.id ? 'Update car' : 'Create car'}</button>
        </form>
    </div>);
};

export {Form};
