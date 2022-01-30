import React from 'react';
import {useForm} from "react-hook-form";

const FormDog = ({dispatch}) => {
    const {handleSubmit, register, reset} = useForm();

    const dogSubmit = (data) => {
        dispatch({type: 'submit', obj: {...data}});
        reset();
    }

    return (<>
        <form onSubmit={handleSubmit(dogSubmit)}>

            <input {...register('dog')} type="text"/>
            <button>Add dog...</button>

        </form>

    </>);
};

export {FormDog};
