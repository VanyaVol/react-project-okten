import React from 'react';
import {useForm} from "react-hook-form";
import {carsServices} from "../../services/cars.services";


const Form = ({newCar, formError}) => {
    const {register, handleSubmit} = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(newCar)}>
                <label>Model: <input {...register('model')} type="text"/></label><br/>
                {formError?.model && <span>{formError.model[0]}<br/></span>}
                <label>Year: <input {...register('year')} type="text"/></label><br/>
                {formError?.year && <span>{formError.year[0]}<br/></span>}
                <label>Price: <input {...register('price')} type="text"/></label><br/>
                {formError?.price && <span>{formError.price[0]}<br/></span>}
                <button>Create car</button>
            </form>
        </div>
    );
};

export {Form};
