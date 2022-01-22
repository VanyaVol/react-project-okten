import React from 'react';
import {useForm} from "react-hook-form";


const Form = () => {

    const {register, handleSubmit} = useForm();


    return (
        <div>
            <form>
                <label>Model: <input {...register('model')} type="text"/></label><br/>
                <label>Year: <input {...register('year')} type="text"/></label><br/>
                <label>Price: <input {...register('price')} type="text"/></label><br/>
                <button>Create car</button>
            </form>
        </div>
    );
};

export {Form};
